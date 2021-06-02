import isCordova from 'tus-js-client/lib/browser/isCordova';
import readAsByteArray from 'tus-js-client/lib/browser/readAsByteArray';
import Encryptor from './encrypt';

class FileSource {
  private _file: File;
  size: number;
  key: number[];

  constructor(file: File, key: number[]) {
    this._file = file;
    this.size = file.size;
    this.key = key;
  }

  async slice(start, end) {
    if (isCordova()) {
      return readAsByteArray(this._file.slice(start, end));
    }

    let value = this._file.slice(start, end);
    const en = new Encryptor(this.key, start);
    return value.arrayBuffer().then((buffer) => {
      return en.encrypt(buffer).then((d) => {
        value = new Blob([d]);
        return { value };
      });
    });
  }

  close() {
    // Nothing to do here since we don't need to release any resources.
  }
}

export default class FileReader {
  private key: number[];

  constructor(key: number[]) {
    this.key = key;
  }

  openFile(input, chunkSize) {
    if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
      return Promise.resolve(new FileSource(input, this.key));
    }
  }
}
