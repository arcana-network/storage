import Decryptor from './decrypt';
import * as config from './config.json';

import { Arcana } from "./Utils"

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
  decrypt = async (file) => {

    // const download = await fetch(config.storageNode + `files/download/${file}`);
    // const blob = await download.blob();
    // downloadBlob(blob, 'download', 'txt');
    //   let res = await instance.get('/files/0a6d7a320db02ec132a8ee2959afb780', {
    //     responseType: 'arraybuffer',
    //   });
    //   let Dec = new Decryptor('b6551d0da85fc275fe613ce37657fb8d');
    //   createAndDownloadBlobFile(await Dec.decrypt(res.data, 0), 'download', 'txt');
  };
}
