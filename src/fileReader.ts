import isCordova from 'tus-js-client/lib/browser/isCordova'
import readAsByteArray from 'tus-js-client/lib/browser/readAsByteArray'
import Encryptor from "./encrypt"

class FileSource {
  private _file: File
    size: number

  constructor (file: File) {
    this._file = file
    this.size = file.size
  }

  async slice (start, end) {
    if (isCordova()) {
      return readAsByteArray(this._file.slice(start, end))
    }

    let value = this._file.slice(start, end)
    console.log("start, end", start, end, value)
    const en = new Encryptor("b6551d0da85fc275fe613ce37657fb8d", start)
    return value.arrayBuffer().then(buffer=>{
      return en.encrypt(buffer).then(d=>{
        value = new Blob([d]);
        return {value}
      })
    })
  }

  close () {
    // Nothing to do here since we don't need to release any resources.
  }
}

export default class FileReader {
  openFile (input, chunkSize) {
    if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
      return Promise.resolve(new FileSource(input))
    }
  }
}