import { KeyGen } from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';

export class Uploader {
  private endpoint: string;
  private chunkSize: number;

  constructor(endpoint: string, chunkSize: number = 4 * 2 ** 20) {
    this.endpoint = endpoint;
    this.chunkSize = chunkSize;
  }

  upload = async (file: File) => {
    // const hash = new KeyGen(file, this.chunkSize);
    const key = await window.crypto.subtle.generateKey(
      {
        name: 'AES-CTR',
        length: 256,
      },
      true,
      ['encrypt', 'decrypt'],
    );
    let aes_raw = await crypto.subtle.exportKey('raw',key)

    let upload = new tus.Upload(file, {
      endpoint: this.endpoint,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onError: function (error) {
        throw 'Failed because: ' + error;
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');
      },
      onSuccess: function () {
        console.log('Download %s from %s', upload.url);
        localStorage.setItem('download url', upload.url);
      },
      fileReader: new FileReader(key),
      fingerprint: function(file, options){
        const hash = new KeyGen(file, this.chunkSize);
        return hash.getHash() 
      },
      chunkSize: this.chunkSize
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
  };
}
