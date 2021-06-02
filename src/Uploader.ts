import { KeyGen } from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';

export class Uploader {
  private endpoint: string;
  private chunkSize: number;

  constructor(endpoint: string, chunkSize: number = 4*2**20) {
    this.endpoint = endpoint;
    this.chunkSize = chunkSize;
  }

  upload = async (file: File) => {
    const hash = new KeyGen(file);
    const key = await hash.getKey();

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
      chunkSize: this.chunkSize 
    });

    upload.start();
  };
}
