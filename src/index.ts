import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import { Config, getProvider, customError, parseHex } from './Utils';
import { Contract, providers } from 'ethers';
import axios, { AxiosInstance } from 'axios';
import { init as SentryInit } from '@sentry/browser';
import { Integrations } from '@sentry/tracing';
import DID from './contracts/DID';

export class StorageProvider {
  private provider: providers.Web3Provider;
  private email: string;
  private api: AxiosInstance;
  private appAddress: string;
  private appId: number;
  private gateway: string;
  private chainId: number;

  constructor(cfg: Config) {
    let config;
    if (cfg) {
      config = cfg;
    } else {
      config = {};
    }

    // If provider is provided by the user, use that provider
    if (config.provider) {
      this.provider = getProvider(config.provider);
    } else {
      // @ts-ignore
      this.provider = getProvider(window.ethereum);
    }
    this.email = config.email;
    this.appId = config.appId;
    if (!config.gateway) {
      this.gateway = 'https://gateway-testnet.arcana.network/api/v1/';
    } else {
      this.gateway = config.gateway + "/api/v1/";
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

  downloadDID = async (did: string) => {
    await this.login();
    let contract = new Contract(localStorage.getItem('did'), DID.abi, this.provider);
    let file = await contract.getFile(parseHex(did));
    this.appAddress = file.app;
    let downloader = new Downloader(this.appAddress, this.provider, this.api);
    await downloader.download(did);
  };

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

  makeMetadataURL = async (title: string, description: string, did: string, file: File) => {
    await this.login();
		// throw error if any input is empty
		if (title === '' || description === '' || did === '' || file === null) {
			throw new Error('Please fill in all the fields');
		}
    // get signer from provider
    let signer = this.provider.getSigner();
    let signature = await signer.signMessage(`Sign this message to attach NFT metadata with your did ${did}`);
    let node = await this.api.get('/get-node-address/');
    let api = axios.create({
      baseURL: node.data['host'],
      headers: {
        Authorization: `Bearer ${did}-${signature}`,
      },
    });
    let form = new FormData();
    form.append('file', file);
    let res = await api.post(`api/v1/nft`, form);
    if (!res.data.success) {
      throw new Error('Error uploading image');
    }
    let res2 = await api.post('/api/v1/metadata', {
      title,
      description,
      did,
      image: res.request.responseURL + '/' + did,
    });
    return res2.request.responseURL + '/' + did;
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
    localStorage.setItem('dkg', res['DKG']);
    localStorage.setItem('did', res['DID']);
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

    if (this.appId) {
      // fetch app address
      res = await this.api.get(`get-address/?id=${this.appId}`);
      if (res.data.address) {
        this.appAddress = res.data.address.length === 40 ? '0x' + res.data.address : res.data.address;
      } else {
        throw new Error('App not found');
      }
    }
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
