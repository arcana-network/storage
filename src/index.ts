(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import * as utils from './Utils';
import { Wallet } from 'ethers';

export class Arcana {
  private wallet: Wallet;
  private convergence: string;
  constructor(wallet: any) {
    this.wallet = wallet;
    if (!this.wallet) {
      throw 'Null wallet';
    }
  }

  setConvergence = async () => {
    if (!this.convergence) {
      const arcana = utils.Arcana();
      this.convergence = await arcana.convergence(await this.wallet.getAddress());
      if (!this.convergence) {
        const conv = String(Math.random());
        await utils.makeTx(this.wallet, 'setConvergence', [conv]);
        this.convergence = conv;
      }
    }
  };

  getUploader = async () => {
    await this.setConvergence();
    return new Uploader(this.wallet, this.convergence);
  };

  getAccess = async () => {
    await this.setConvergence();
    return new Access(this.wallet, this.convergence);
  };

  getDownloader = async () => {
    await this.setConvergence();
    return new Downloader(this.wallet, this.convergence);
  };
}
export { utils };
