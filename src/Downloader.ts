import Decryptor from './decrypt';
import * as config from './config.json';
import { decryptWithPrivateKey } from 'eth-crypto';
import { Arcana, fromHexString, stringToObj, AESDecrypt } from "./Utils"
import { utils } from "ethers";
import FileWriter from "./FileWriter"

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
  download = async (did, uploadId) => {
    // @ts-ignore
    const arcana = Arcana(window.privateKey);
    let file = await arcana.files(did);
    
    
    // @ts-ignore
    const decryptedKey = await decryptWithPrivateKey(window.privateKey, stringToObj(file.encryptedKey));
    const key = await window.crypto.subtle.importKey('raw', fromHexString(decryptedKey), 'AES-CTR', false, ['encrypt', 'decrypt']);

    const fileMeta = JSON.parse(await AESDecrypt(key, utils.toUtf8String(file.encryptedMetaData)))

    let Dec = new Decryptor(key);

    const fileWriter = new FileWriter(fileMeta.name);
    const chunkSize = Math.floor((2**20)/5);
    for(let i=0;i<fileMeta.size;i+=chunkSize){
      const download = await fetch(config.storageNode + `files/download/${uploadId}`, {
        headers: {
          'Range': `bytes=${i}-${i+chunkSize-1}`
        }
      });
      const buff = await download.arrayBuffer();
      console.log("fetch: ",i,buff, chunkSize)
      const dec = await Dec.decrypt(buff, i);
      console.log("dec", dec)
      await fileWriter.write(dec, i);
    }
    fileWriter.createDownload()
  };
}