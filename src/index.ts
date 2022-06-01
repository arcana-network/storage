import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import { Config, getProvider, customError,makeTx, parseHex, getFile } from './Utils';
import axios, { AxiosInstance } from 'axios';
import { init as SentryInit } from '@sentry/browser';
import { Integrations } from '@sentry/tracing';
import { chainId } from './constant';
import { wrapInstance } from "./sentry";

export class StorageProvider {
  // private provider: providers.Web3Provider;
  private provider: any;
  private email: string;
  private api: AxiosInstance;
  private appAddress: string;
  private appId: number;
  private gateway: string;
  private chainId: number;
  private debug: boolean;

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
      this.gateway = new URL("/api/v1/",config.gateway).href;
    }
    if (!this.chainId) {
      this.chainId = 40404;
    } else {
      this.chainId = config.chainId;
    }

    if (config.debug) {
      SentryInit({
        dsn: 'https://6fbd3c0536b543ecbacbf6ba4320ec11@o394338.ingest.sentry.io/5244311',
        integrations: [
          new Integrations.BrowserTracing({
            tracingOrigins: [this.gateway],
          }),
        ],
        tracesSampleRate: 0,
      });
      wrapInstance(this)
      this.debug = true
    } else {
      this.debug = false
    }

    this.provider.on("network", (newNetwork, oldNetwork) => {
      if (oldNetwork) {
        this.onNetworkChange(newNetwork, oldNetwork);
      }
    });

    // call onAccountChange when the account changes
    // @ts-ignore
    this.provider.provider.on("accountsChanged", (accounts) => {
      this.onAccountChange(accounts);
    })
  }

  onNetworkChange = (newNetwork, oldNetwork) => {
    window.location.reload();
  }

  // Reload on account changed
  onAccountChange = (accounts) => {
    window.location.reload();
  }

  downloadDID = async (did: string) => {
    await this.login();
    const file = await getFile(did, this.provider);
    this.appAddress = file.app;
    const downloader = new Downloader(this.appAddress, this.provider, this.api, this.debug);
    await downloader.download(did);
  };

  getUploader = async () => {
    await this.login();
    return new Uploader(this.appAddress, this.provider, this.api, this.debug);
  };

  getAccess = async () => {
    await this.login();
    return new Access(this.appAddress, this.provider, this.api, this.debug);
  };

  getDownloader = async () => {
    await this.login();
    return new Downloader(this.appAddress, this.provider, this.api, this.debug);
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

    // Fetch chain id from provider
    let network = await this.provider.getNetwork();
    this.chainId = network.chainId;

    // throw error if chain id is not equal to the chain id of the app
    if (this.chainId !== chainId) {
      throw new Error('Wrong network, please change the network to the arcana');
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

  linkNft = async (fileId:string, tokenId:Number, nftContract:string, chainId:Number) => {
    fileId = parseHex(fileId);
    nftContract = parseHex(nftContract);
    return await makeTx(this.appAddress, this.api, this.provider  , 'linkNFT', [fileId, tokenId, nftContract,chainId]);
  }
}
