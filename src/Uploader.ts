import { KeyGen, fromHexString, toHexString, makeTx, AESEncrypt, encryptKey, decryptKey } from './Utils';
import * as tus from 'tus-js-client';
import FileReader from './fileReader';
import { utils, BigNumber } from 'ethers';
import * as config from './config.json';

export class Uploader {
  private wallet: any;
  private convergence: string;
  constructor(wallet: any, convergence: string){
    this.wallet = wallet;
    this.convergence = convergence;
  }

  upload = async (file: File, chunkSize: number = 4 * 2 ** 20) => {
    const hasher = new KeyGen(file, chunkSize);
    let key;
    const hash = await hasher.getHash();
    let prevKey = localStorage.getItem(`key::${hash}`);
    const did = utils.id(hash + this.convergence);

    if (prevKey) {
      const decryptedKey = await decryptKey(this.wallet.privateKey, prevKey);
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

      const encryptedKey = await encryptKey(this.wallet._signingKey().publicKey, hexString);

      const encryptedMetaData = await AESEncrypt(
        key,
        JSON.stringify({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
        }),
      );
      // TO DO: Make this dynamic 
      const encryptedFileHash = utils.formatBytes32String("encryptedFileHash");

      await makeTx(this.wallet, 'uploadInit', [
        did,
        BigNumber.from(6),
        BigNumber.from(4),
        BigNumber.from(123),
        utils.toUtf8Bytes(encryptedMetaData),
        encryptedKey,
        encryptedFileHash,
        '0x9cc14a288bb5cb9ec0e85b606cb6585bb7ca6a8e',
      ]);

      localStorage.setItem(`key::${hash}`, encryptedKey);
    }
    const endpoint = config.storageNode + 'files/';

    let upload = new tus.Upload(file, {
      endpoint,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
        hash,
        key: did,
      },
      onError: function (error) {
        throw 'Failed because: ' + error;
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + '%');
        // @ts-ignore
        window.fileId = upload.url.split('files/')[1];
      },
      onSuccess: function () {
        console.log('Download %s from %s', upload.url);
        localStorage.setItem('download url', upload.url);
      },
      fileReader: new FileReader(key),
      fingerprint: function (file, options) {
        return Promise.resolve(options.metadata.hash);
      },
      chunkSize,
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
    return did;
  };
}
