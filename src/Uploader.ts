import {
  KeyGen,
  fromHexString,
  toHexString,
  makeTx,
  AESEncrypt,
  customError,
  isFileUploaded,
  getDKGNodes,
} from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';
import { utils, BigNumber, Wallet, ethers } from 'ethers';
import axios, { AxiosInstance } from 'axios';
import { split } from 'shamir';
import { encrypt } from 'eciesjs';

import { randomBytes } from 'crypto-browserify';
import { id } from 'ethers/lib/utils';
import { Mutex } from 'async-mutex';

import {wrapInstance} from "./sentry";
import { requiresLocking } from './locking';

export class Uploader {
  private provider: any;
  private api: AxiosInstance;
  private appAddress: string;
  private appId: number;
  private readonly lock: Mutex;

  constructor(appId: number, appAddress: string, provider: any, api: AxiosInstance, lock: Mutex, debug: boolean) {
    this.provider = provider;
    this.api = api;
    this.appId = appId;
    this.appAddress = appAddress;
    this.lock = lock;

    if (debug) {
      wrapInstance(this)
    }
  }

  onSuccess = () => {};

  onProgress = (bytesUploaded: number, bytesTotal: number): void => {};

  onError = (err) => {
    console.log('Error', err);
  };

  onUpload = async (host: string, token: string, did: string) => {
    if (host) {
      let res;
      for (let i = 0; i < 8; i++) {
        try {
          res = await this.api.get(`${host}api/v1/hash`, { headers: { Authorization: `Bearer ${token}` } });
          break;
        } catch {
          await new Promise((r) => setTimeout(r, 500));
          console.log('retrying to fetch tx hash');
        }
      }
      try {
        const tx = await this.provider.getTransaction(
          res.data.hash.substring(0, 2) == '0x' ? res.data.hash : '0x' + res.data.hash,
        );
        await tx.wait();
        await this.onSuccess();
      } catch (e) {
        if (e.reason) {
          if (e.reason.includes('file_already_uploaded')) {
            throw customError('TRANSACTION', `File already exist. DID: ${did}`);
          } else {
            throw customError('TRANSACTION', e.reason);
          }
        } else {
          throw customError('', e.error);
        }
      }
    }
  };

  @requiresLocking
  async upload (file: File | Blob, chunkSize: number = 10 * 2 ** 20) {
    if (!(file instanceof Blob)) {
      throw customError('TRANSACTION', 'File must be a Blob or a descendant of a Blob such as a File.')
    }

    const walletAddress = (await this.provider.send('eth_requestAccounts', []))[0];
    const hasher = new KeyGen(file, chunkSize);
    let key;
    const hash = await hasher.getHash();
    let prevKey = localStorage.getItem(`${walletAddress}::key::${hash}`);
    let host = localStorage.getItem(`${walletAddress}::host::${hash}`);
    let token = localStorage.getItem(`${walletAddress}::token::${hash}`);
    let tx_hash;
    const sign_hash = await this.provider.send('personal_sign', [
      `Sign this to proceed with the encryption of file with hash ${hash}`,
      walletAddress,
    ]);
    const did = utils.id(hash + sign_hash);
    if (prevKey) {
      key = await window.crypto.subtle.importKey('raw', fromHexString(prevKey), 'AES-CTR', false, ['encrypt']);
      if (await isFileUploaded(this.appAddress, did, this.provider)) {
        throw customError('TRANSACTION', `File is already uploaded. DID is ${did}`);
      }
    } else {
      key = await window.crypto.subtle.generateKey(
        {
          name: 'AES-CTR',
          length: 256,
        },
        true,
        ['encrypt', 'decrypt'],
      );
      const aes_raw = await crypto.subtle.exportKey('raw', key);
      const hexString = toHexString(aes_raw);
      const encryptedMetaData = await AESEncrypt(
        key,
        JSON.stringify({
          name: 'name' in file ? file.name : '',
          type: file.type,
          size: file.size,
          lastModified: 'lastModified' in file ? file.lastModified : new Date(),
          hash,
        }),
      );

      let node = (await this.api.get(`/get-node-address/?appid=${this.appId}`)).data;
      host = node.host;
      let ephemeralWallet = await Wallet.createRandom();
      let res = await makeTx(this.appAddress, this.api, this.provider, 'uploadInit', [
        did,
        BigNumber.from(file.size),
        utils.toUtf8Bytes(encryptedMetaData),
        node.address,
        ephemeralWallet.address,
      ]);
      token = res.token;
      tx_hash = res.txHash;

      // Fetch DKG Node Details from dkg contract
      const nodes = await getDKGNodes(this.provider);
      // Doing shamir secrete sharing
      const parts = nodes.length;
      // At least 2/3rd nodes is required for share recovery
      const quorum = nodes.length - Math.floor(nodes.length / 3);
      const shares = split(randomBytes, parts, quorum, new Uint8Array(aes_raw));
      for (let i = 0; i < parts; i++) {
        const publicKey = nodes[i].pubKx._hex.replace('0x', '').padStart(64, '0') + nodes[i].pubKy._hex.replace('0x', '').padStart(64, '0');
        if (publicKey.length < 128) {
          console.log('public key is too short');
          continue;
        }
        let ciphertext_raw = encrypt(publicKey, shares[i + 1]);
        let ciphertext = ciphertext_raw.toString('hex');
        localStorage.setItem('pk', ephemeralWallet.privateKey);
        let url = 'https://' + nodes[i].declaredIp + '/rpc';
        await axios.post(url, {
          jsonrpc: '2.0',
          method: 'StoreKeyShare',
          id: 10,
          params: {
            tx_hash,
            encrypted_share: ciphertext,
            signature: await ephemeralWallet.signMessage(id(JSON.stringify({ tx_hash, encrypted_share: ciphertext }))),
          },
        });
      }
      localStorage.setItem(`${walletAddress}::host:${hash}`, host);
      localStorage.setItem(`${walletAddress}::key::${hash}`, hexString);
      localStorage.setItem(`${walletAddress}::token::${hash}`, token);
    }
    let endpoint = host + 'api/v1/files/';
    let upload = new tus.Upload(file, {
      endpoint,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: 'name' in file ? file.name : '',
        filetype: file.type,
        hash,
        key: did,
      },
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: () => {
        localStorage.removeItem(`${walletAddress}::key::${hash}`);
        localStorage.removeItem(`${walletAddress}::host::${hash}`);
        localStorage.removeItem(`${walletAddress}::token::${hash}`);
        this.onUpload(host, token, did);
      },

      removeFingerprintOnSuccess: true,
      fileReader: new FileReader(key),
      fingerprint: function (file, options) {
        return Promise.resolve(options.metadata.hash);
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      chunkSize,
      onBeforeRequest: function (req) {
        req.setHeader('signature', 'sig');
      },
    });

    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }
      // Start the upload
      upload.start();
    });
    return did.replace("0x" , "");
  };
}
