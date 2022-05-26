import Decryptor from './decrypt';
import { Arcana, hasher2Hex, AESDecrypt, makeTx, customError, getDKGNodes, getFile } from './Utils';
import { utils, Wallet } from 'ethers';
import FileWriter from './FileWriter';
import { readHash } from './constant';
import Sha256 from './SHA256';
import axios, { AxiosInstance } from 'axios';
import { join } from 'shamir';
import { id } from 'ethers/lib/utils';
import { decodeHex } from 'eciesjs/dist/utils';
import { decrypt } from 'eciesjs';

const downloadBlob = (blob, fileName) => {
  // @ts-ignore
  if (navigator.msSaveBlob) {
    // IE 10+
    // @ts-ignore
    navigator.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement('a');
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export function createAndDownloadBlobFile(body, filename) {
  const blob = new Blob([body]);
  downloadBlob(blob, filename);
}

export class Downloader {
  private provider: any;
  private hasher;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string, provider: any, api: AxiosInstance) {
    this.provider = provider;
    this.hasher = new Sha256();
    this.api = api;
    this.appAddress = appAddress;
  }

  onSuccess = async () => {};
  onProgress = async (bytesDownloaded: number, bytesTotal: number) => {};

  download = async (did) => {
    did = did.substring(0, 2) !== '0x' ? '0x' + did : did;
    const arcana = Arcana(this.appAddress, this.provider);
    let file, txHash;
    const walletAddress = (await this.provider.send('eth_requestAccounts', []))[0];
    try {
      file = await getFile(did, this.provider);
    } catch (e) {
      throw customError('UNAUTHORIZED', "You can't download this file");
    }
    let ephemeralWallet = await Wallet.createRandom();
    let res = await makeTx(this.appAddress, this.api, this.provider, 'checkPermission', [
      did,
      readHash,
      ephemeralWallet.address,
    ]);
    txHash = res.txHash;
    let shares = {};
    const nodes = await getDKGNodes(this.provider);
    for (let i = 0; i < nodes.length; i++) {
      let res = await axios.post('https://' + nodes[i].declaredIp + '/rpc', {
        jsonrpc: '2.0',
        method: 'RetrieveKeyShare',
        id: 10,
        params: {
          tx_hash: txHash,
          signature: await ephemeralWallet.signMessage(id(JSON.stringify({ tx_hash: txHash }))),
        },
      });

      let sh = res.data.result.share;
      shares[i + 1] = decrypt(ephemeralWallet.privateKey, decodeHex(sh));
    }
    let decryptedKey = join(shares);

    const key = await window.crypto.subtle.importKey('raw', decryptedKey, 'AES-CTR', false, ['encrypt', 'decrypt']);

    const fileMeta = JSON.parse(await AESDecrypt(key, utils.toUtf8String(file.encryptedMetaData)));

    let Dec = new Decryptor(key);

    const fileWriter = new FileWriter(fileMeta.name);
    const chunkSize = 10 * 2 ** 20;
    let downloaded = 0;
    for (let i = 0; i < fileMeta.size; i += chunkSize) {
      const range = `bytes=${i}-${i + chunkSize - 1}`;
      const download = await fetch(res.host + `files/${did}`, {
        headers: {
          Range: range,
          Authorization: `Bearer ${res.token}`,
        },
      });
      const buff = await download.arrayBuffer();
      const dec = await Dec.decrypt(buff, i);
      await fileWriter.write(dec, i);
      this.hasher.update(dec);
      downloaded += dec.byteLength;
      await this.onProgress(downloaded, fileMeta.size);
    }
    const decryptedHash = hasher2Hex(this.hasher.digest());
    const success = fileMeta.hash == decryptedHash;
    if (success) {
      fileWriter.createDownload();
      await this.onSuccess();
    } else {
      throw new Error('Hash does not matches with uploaded file');
    }
  };
}
