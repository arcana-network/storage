import {
  KeyGen,
  fromHexString,
  toHexString,
  makeTx,
  AESEncrypt,
  encryptKey,
  decryptKey,
  getProvider,
  customError,
} from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';
import { utils, BigNumber } from 'ethers';
import { AxiosInstance } from 'axios';

export class Uploader {
  private wallet: any;
  private convergence: string;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string, wallet: any, convergence: string, api: AxiosInstance) {
    this.wallet = wallet;
    this.convergence = convergence;
    this.api = api;
    this.appAddress = appAddress;
  }

  onSuccess = () => {};

  onProgress = (bytesUploaded: number, bytesTotal: number) => {};

  onError = (err) => {
    console.log('Error', err);
  };

  onUpload = async (host: string, token: string, did: string) => {
    if (host) {
      let res;
      for (let i = 0; i < 5; i++) {
        try {
          res = await this.api.get(`${host}/hash`, { headers: { Authorization: `Bearer ${token}` } });
          break;
        } catch {
          await new Promise((r) => setTimeout(r, 1000));
          console.log('retrying to fetch tx hash');
        }
      }
      const provider = getProvider();
      try {
        const tx = await provider.getTransaction(
          res.data.hash.substring(0, 2) == '0x' ? res.data.hash : '0x' + res.data.hash,
        );
        await tx.wait();
        await this.onSuccess();
      } catch (e) {
        if (e.reason.includes('Owner already exist for this file')) {
          throw customError('TRANSACTION', `File already exist. DID: ${did}`);
        } else {
          throw customError('TRANSACTION', e.reason);
        }
      }
    }
  };

  upload = async (fileRaw: any, chunkSize: number = 10 * 2 ** 20) => {
    let file = fileRaw;
    const walletAddress = await this.wallet.getAddress();
    if (file instanceof File) {
      file = new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });
      file.name = fileRaw.name;
      // file['lastModified'] = fileRaw.lastModified;
      file['name'] = fileRaw.name;
    }
    const hasher = new KeyGen(file, chunkSize);
    let key;
    const hash = await hasher.getHash();
    let prevKey = localStorage.getItem(`${walletAddress}::key::${hash}`);
    let host = localStorage.getItem(`${walletAddress}::host::${hash}`);
    let token = localStorage.getItem(`${walletAddress}::token::${hash}`);
    const did = utils.id(hash + this.convergence);
    const wallet = this.wallet;

    if (prevKey) {
      const decryptedKey = await decryptKey(this.wallet.privateKey, prevKey);
      key = await window.crypto.subtle.importKey('raw', fromHexString(decryptedKey), 'AES-CTR', false, ['encrypt']);
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

      const encryptedKey = await encryptKey(this.wallet._signingKey().publicKey, hexString);

      const encryptedMetaData = await AESEncrypt(
        key,
        JSON.stringify({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          hash,
        }),
      );

      let node = (await this.api.get('/api/get-address/')).data;
      host = node.host;

      let res = await makeTx(this.appAddress, this.api, this.wallet, 'uploadInit', [
        did,
        BigNumber.from(6),
        BigNumber.from(4),
        BigNumber.from(file.size),
        utils.toUtf8Bytes(encryptedMetaData),
        utils.toUtf8Bytes(encryptedKey),
        node.address,
      ]);
      token = res.token;
      localStorage.setItem(`${walletAddress}::host:${hash}`, host);
      localStorage.setItem(`${walletAddress}::key::${hash}`, encryptedKey);
      localStorage.setItem(`${walletAddress}::token::${hash}`, token);
    }
    let endpoint = host + 'files/';
    // console.log('Token: ', token);
    // console.log('Endpoint: ', endpoint);
    let upload = new tus.Upload(file, {
      endpoint,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
        hash,
        key: did,
      },
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: () => {
        this.onUpload(host, token, did);
      },
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
    return did;
  };
}
