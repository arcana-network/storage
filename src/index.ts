import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import { Config, getProvider, customError } from './Utils';
import { providers } from 'ethers';
import axios, { AxiosInstance } from 'axios';
import { init as SentryInit } from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

export class StorageProvider {
  private provider: providers.Web3Provider;
  private email: string;
  private api: AxiosInstance;
  private appAddress: string;
  private appId: number;
  private gateway: string;
  private chainId: number;

  constructor(config: Config) {
    // If provider is provided by the user, use that provider
    if (config.provider) {
      this.provider = getProvider(config.provider);
    }
    this.email = config.email;
    this.appId = config.appId;
    if (!config.gateway) {
      this.gateway = 'https://gateway-testnet.arcana.network/';
    } else {
      this.gateway = config.gateway;
    }
    if (!this.chainId) {
      this.chainId = 40404;
    } else {
      this.chainId = config.chainId;
    }
    if (config.debug) {
      SentryInit({
        dsn: 'https://1a411b6bfed244de8f6a7d64bb432bd4@o1011868.ingest.sentry.io/6081085',
        integrations: [
          new Integrations.BrowserTracing({
            tracingOrigins: [this.gateway],
          }),
        ],
        tracesSampleRate: 1.0,
      });
    }
  }

  getUploader = async () => {
    await this.login();
    return new Uploader(this.appAddress, this.provider, this.api);
  };

  getAccess = async () => {
    await this.login();
    return new Access(this.appAddress, this.provider, this.api);
  };

  getDownloader = async () => {
    await this.login();
    return new Downloader(this.appAddress, this.provider, this.api);
  };

  login = async () => {
    // Already login hence return null response as no need to login again
    if (this.api) {
      return;
    }
    if (!this.provider) {
      // @ts-ignore
      if (window.ethereum) {
        throw customError;
      }
    }
    let res = (await axios.get(this.gateway + 'get-config/')).data;
    localStorage.setItem('forwarder', res['Forwarder']);
    let accounts = await this.provider.send('eth_requestAccounts', []);
    let nonce = (await axios.get(this.gateway + `get-nonce/?address=${accounts[0]}`)).data;
    const signer = await this.provider.getSigner();
    let sig = await signer.signMessage(String(nonce));
    res = await axios.post(this.gateway + `login/`, {
      signature: sig,
      email: this.email,
      address: accounts[0],
    });
    this.api = axios.create({
      baseURL: this.gateway,
      headers: {
        Authorization: `Bearer ${res.data.token}`,
      },
    });
    this.appAddress = (await this.api.get(`get-address/?id=${this.appId}`)).data.address;
    this.appAddress = this.appAddress.length === 40 ? '0x' + this.appAddress : this.appAddress;
  };

  myFiles = async () => {
    await this.login();
    let res = await this.api('list-files/');
    let data = [];
    if (res.data) data = res.data;
    return data;
  };

  sharedFiles = async () => {
    await this.login();
    let res = await this.api('shared-files/');
    let data = [];
    if (res.data) data = res.data;
    return data;
  };
}
