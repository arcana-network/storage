(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import * as utils from './Utils';

export class Arcana {
  private wallet: any;
  private convergence: string;
  constructor(wallet: any, convergence: string) {
    this.wallet = wallet;
    this.convergence = convergence;
  }

  getUploader = () => {
    return new Uploader(this.wallet, this.convergence);
  }

  getAccess = () => {
    return new Access(this.wallet, this.convergence);
  }

  getDownloader = () => {
    return new Downloader(this.wallet, this.convergence);
  }
}
export { utils };