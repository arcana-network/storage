(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import * as utils from './Utils';
import { Wallet } from 'ethers';
import axios, { AxiosInstance } from 'axios';
import * as config from './config.json';

export class Arcana {
  private wallet: Wallet;
  private convergence: string;
  private email: string;
  private api: AxiosInstance;

  constructor(wallet: any, email: string) {
    this.wallet = wallet;
    this.email = email;
    if (!this.wallet) {
      throw 'Null wallet';
    }
  }

  setConvergence = async () => {
    await this.login();
    if (!this.convergence) {
      const arcana = utils.Arcana();
      this.convergence = await arcana.convergence(await this.wallet.getAddress());
      if (!this.convergence) {
        const conv = String(Math.random());
        await utils.makeTx(this.api, this.wallet, 'setConvergence', [conv]);
        this.convergence = conv;
      }
    }
  };

  getUploader = async () => {
    await this.setConvergence();
    return new Uploader(this.wallet, this.convergence, this.api);
  };

  getAccess = async () => {
    await this.setConvergence();
    return new Access(this.wallet, this.convergence, this.api);
  };

  getDownloader = async () => {
    await this.setConvergence();
    return new Downloader(this.wallet, this.convergence, this.api);
  };

  login = async () => {
    let nonce = (await axios.get(config.gateway + `get-nonce/?email=${this.email}`)).data;
    let sig = await this.wallet.signMessage(String(nonce));
    if (nonce === 0) {
      await axios.post(config.gateway + `register/`, {
        signature: sig,
        user: { name: '', email: this.email, public_key: this.wallet.publicKey },
      });
      await this.login();
    } else {
      let res = await axios.post(config.gateway + `login/`, { signature: sig, email: this.email });
      this.api = axios.create({
        baseURL: config.gateway,
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
    }
  };
}
export { utils };
