import "./SHA256"
import Sha256 from "./SHA256";

export class KeyGen {
  hasher: any;
  file: File;
  chunkSize: number;

  constructor(file: File) {
    this.file = file;
    this.hasher = new Sha256();
    this.chunkSize = 2 ** 20;
  }

  async read<T>(position: number, length: number, binary?: boolean): Promise<{data: T, length: number}> {
    return new Promise((resolve, reject) => {
      this._chunk_reader(position, length, binary, (evt: any) => {
        if (evt.target.error == null) {
          resolve({ data: evt.target.result, length: evt.total });
        } else {
          reject(evt.target.error);
        }
      });
    });
  }

  private _chunk_reader(offset: number, length: number, binary: boolean, readEventHandler: (evt: any) => void) {
    const r: FileReader = new FileReader();
    let blob;
    if (!(offset === 0 && this.file.size <= length)) {
      blob = this.file.slice(offset, offset + length);
    } else {
      blob = this.file;
    }
    r.onload = readEventHandler;
    if (binary) {
      r.readAsBinaryString(blob);
    } else {
      r.readAsArrayBuffer(blob);
    }
  }

  getKey = async () => {
    let offset = 0;
    while (offset < this.file.size) {
      let data = await this.read(offset, offset + this.chunkSize);
      offset += data.length;
      this.hasher.update(data.data);
    }
    return this.hasher.digest().slice(16);
  };
}