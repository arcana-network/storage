import { KeyGen, fromHexString, toHexString, sigToString, stringToObj, makeTx } from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';
import { encryptWithPublicKey, decryptWithPrivateKey } from 'eth-crypto';
import { utils, BigNumber, ethers } from 'ethers';

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
    // @ts-ignore
    const privateKey = window.privateKey;
    // @ts-ignore
    const publicKey = window.publicKey;

    if (prevKey) {
      const decryptedKey = await decryptWithPrivateKey(privateKey,stringToObj(prevKey))
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

      const encrypted = await encryptWithPublicKey(publicKey, hexString);
      const encryptedKey = sigToString(encrypted);

      await makeTx(privateKey, 'uploadInit', [
        ethers.utils.id(hash),
        BigNumber.from(6),
        BigNumber.from(4),
        BigNumber.from(123),
        utils.toUtf8Bytes('data'),
        encryptedKey,
        '0x9cc14a288bb5cb9ec0e85b606cb6585bb7ca6a8e'
      ]);

      localStorage.setItem(`key::${hash}`, encryptedKey);
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
