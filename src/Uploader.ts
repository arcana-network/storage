import { KeyGen, fromHexString, toHexString } from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';
import { encryptWithPublicKey } from "eth-crypto";



export class Uploader {
  private endpoint: string;
  private chunkSize: number;

  constructor(endpoint: string, chunkSize: number = 4 * 2 ** 20) {
    this.endpoint = endpoint;
    this.chunkSize = chunkSize;
  }

  upload = async (file: File) => {
    const hasher = new KeyGen(file, this.chunkSize);
    let key;
    const hash = await hasher.getHash();
    let prevKey = localStorage.getItem(`key::${hash}`);
    let encryptionPublicKey: string =
      '2cee2abadd4bbebe5dfb2b5f44f421afc91252894637cb223a1c1cccba3672245ae78113dee99ce986dbfd7061ec6a0d37af6233e9a5807526f3f66a27b1a58b';
    
    const encrypted = await encryptWithPublicKey(
      encryptionPublicKey,
      'foobar', // message
    );
    console.log(encrypted);
    if (prevKey) {
      key = await window.crypto.subtle.importKey('raw', fromHexString(prevKey), 'AES-CTR', false, ['encrypt']);
    } else {
      key = await window.crypto.subtle.generateKey(
        {
          name: 'AES-CTR',
          length: 256,
        },
        true,
        ['encrypt', 'decrypt'],
      );
      let aes_raw = await crypto.subtle.exportKey('raw', key);
      // TO DO encrypt and store
      localStorage.setItem(`key::${hash}`, toHexString(aes_raw));
    }

    let upload = new tus.Upload(file, {
      endpoint: this.endpoint,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
        hash,
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
      fingerprint: function (file, options) {
        return Promise.resolve(options.metadata.hash);
      },
      chunkSize: this.chunkSize,
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
