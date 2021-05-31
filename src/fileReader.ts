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
    const en = new Encryptor("d78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822", start)
    const buffer = await en.encrypt(await value.arrayBuffer())
    value = new Blob([buffer]);
    return Promise.resolve({ value })
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