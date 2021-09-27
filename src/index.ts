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
  private appAddress: string;

  constructor(appAddress: string, privateKey: string, email: string) {
    this.wallet = utils.getWallet(privateKey);
    this.email = email;
    this.appAddress = appAddress;
    if (!this.wallet) {
      throw 'Null wallet';
    }
  }

  setConvergence = async () => {
    await this.login();
    if (!this.convergence) {
      const arcana = utils.Arcana(this.appAddress);
      this.convergence = await arcana.convergence(await this.wallet.getAddress());
      if (!this.convergence) {
        const conv = String(Math.random());
        await utils.makeTx(this.appAddress, this.api, this.wallet, 'setConvergence', [conv]);
        this.convergence = conv;
      }
    }
  };

  getUploader = async () => {
    await this.setConvergence();
    return new Uploader(this.appAddress, this.wallet, this.convergence, this.api);
  };

  getAccess = async () => {
    await this.setConvergence();
    return new Access(this.appAddress, this.wallet, this.convergence, this.api);
  };

  getDownloader = async () => {
    await this.setConvergence();
    return new Downloader(this.appAddress, this.wallet, this.convergence, this.api);
  };

  login = async () => {
    let nonce = (await axios.get(config.gateway + `get-nonce/?address=${this.wallet.address}`)).data;
    let sig = await this.wallet.signMessage(String(nonce));
    let res = await axios.post(config.gateway + `login/`, {
      signature: sig,
      email: this.email,
      address: this.wallet.address,
    });
    this.api = axios.create({
      baseURL: config.gateway,
      headers: {
        Authorization: `Bearer ${res.data.token}`,
      },
    });
  };

  myFiles = async () => {
    await this.setConvergence();
    let res = await this.api('api/list-files/');
    return res.data;
  };

  sharedFiles = async () => {
    await this.setConvergence();
    let res = await this.api('api/shared-files/');
    return res.data;
  };
}
export { utils };
