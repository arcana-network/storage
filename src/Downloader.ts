import Decryptor from './decrypt';
import * as config from './config.json';
import { decryptWithPrivateKey } from 'eth-crypto';
import { Arcana, hasher2Hex, fromHexString, AESDecrypt, makeTx, customError } from './Utils';
import { utils } from 'ethers';
import FileWriter from './FileWriter';
import { readHash } from './constant';
import Sha256 from './SHA256';
import { AxiosInstance } from 'axios';

const downloadBlob = (blob, fileName) => {
  if (navigator.msSaveBlob) {
    // IE 10+
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
  private wallet: any;
  private convergence: string;
  private hasher;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string, wallet: any, convergence: string, api: AxiosInstance) {
    this.wallet = wallet;
    this.convergence = convergence;
    this.hasher = new Sha256();
    this.api = api;
    this.appAddress = appAddress;
  }

  onSuccess = async () => {};
  onProgress = async (bytesDownloaded: number, bytesTotal: number) => {};

  download = async (did) => {
    did = did.substring(0, 2) !== '0x' ? '0x' + did : did;
    const arcana = Arcana(this.appAddress, this.wallet);
    let file;
    try {
      file = await arcana.getFile(did, readHash);
    } catch (e) {
      throw customError('UNAUTHORIZED', "You can't download this file");
    }
    let res = await makeTx(this.appAddress, this.api, this.wallet, 'checkPermission', [did, readHash]);
    const decryptedKey = await decryptWithPrivateKey(
      this.wallet.privateKey,
      JSON.parse(utils.toUtf8String(file.encryptedKey)),
    );
    const key = await window.crypto.subtle.importKey('raw', fromHexString(decryptedKey), 'AES-CTR', false, [
      'encrypt',
      'decrypt',
    ]);

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
