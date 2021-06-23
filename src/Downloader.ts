import Decryptor from './decrypt';
import * as config from './config.json';
import { decryptWithPrivateKey } from 'eth-crypto';
import { Arcana, fromHexString, stringToObj } from "./Utils"

const downloadBlob = (blob, filename, extension) => {
  const fileName = `${filename}.${extension}`;
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

export function createAndDownloadBlobFile(body, filename, extension) {
  const blob = new Blob([body]);
  downloadBlob(blob, filename, extension);
}

export class Downloader {
  download = async (did, uploadId) => {
    // @ts-ignore
    const arcana = Arcana(window.privateKey);
    let file = await arcana.files(did);
    
    console.log("file encryptedKey",file.encryptedKey);
    
    // @ts-ignore
    const decryptedKey = await decryptWithPrivateKey(window.privateKey, stringToObj(file.encryptedKey));
    const key = await window.crypto.subtle.importKey('raw', fromHexString(decryptedKey), 'AES-CTR', false, ['encrypt', 'decrypt']);
    const download = await fetch(config.storageNode + `files/download/${uploadId}`);
    const blob = await download.blob();
    let Dec = new Decryptor(key);
    createAndDownloadBlobFile(await Dec.decrypt(await blob.arrayBuffer(), 0), 'download', 'txt');
  };
}
