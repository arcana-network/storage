import Decryptor from './decrypt';
import * as config from './config.json';
import { decryptWithPrivateKey } from 'eth-crypto';
import { Arcana, hasher2Hex, fromHexString, AESDecrypt, makeTx } from './Utils';
import { utils, Wallet } from 'ethers';
import FileWriter from './FileWriter';
import { readHash } from './constant';
import Sha256 from './SHA256';

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

  constructor(wallet: any, convergence: string) {
    this.wallet = wallet;
    this.convergence = convergence;
    this.hasher = new Sha256();
  }

  download = async (did) => {
    const arcana = Arcana(this.wallet);
    let file = await arcana.getFile(did, readHash);
    await makeTx(this.wallet, 'checkPermission', [did, readHash]);
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
    const chunkSize = 2 ** 20;
    for (let i = 0; i < fileMeta.size; i += chunkSize) {
      const range = `bytes=${i}-${i + chunkSize - 1}`;
      const download = await fetch(config.storageNode + `files/download/${did}`, {
        headers: {
          Range: range,
        },
      });
      const buff = await download.arrayBuffer();
      const dec = await Dec.decrypt(buff, i);
      await fileWriter.write(dec, i);
      this.hasher.update(dec);
    }
    const decryptedHash = hasher2Hex(this.hasher.digest());
    const success = fileMeta.hash == decryptedHash;
    if (success) {
      fileWriter.createDownload();
    } else {
      throw new Error('Hash does not matches with uploaded file');
    }
  };
}
