import axios, { AxiosInstance } from 'axios';
import { init as SentryInit } from '@sentry/browser';
import { Integrations } from '@sentry/tracing';
import { Mutex } from 'async-mutex';

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { FileAPI } from './fileAPI';
import { Config, customError, getFile, getProvider, makeTx, parseHex } from './Utils';
import { chainId, chainIdToBlockchainExplorerURL, chainIdToGateway, chainIdToRPCURL } from './constant';
import { wrapInstance } from './sentry';
import { SegmentAnalytics, trackWithCommonProps } from './segment';

export class StorageProvider {
  // private provider: providers.Web3Provider;
  private readonly provider: any;
  private readonly email: string;
  private api: AxiosInstance;
  private appAddress: string;
  private readonly appId: number;
  private readonly gateway: string;
  private readonly chainId: number;
  private readonly debug: boolean;
  private readonly lock: Mutex;
  private initialisedPromise: Promise<void>;

  public files: FileAPI;

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
    if (!config.chainId) {
      this.chainId = chainId;
    } else {
      this.chainId = config.chainId;
    }
    if (!config.gateway) {
      this.gateway = chainIdToGateway.get(this.chainId)
    } else {
      this.gateway = new URL("/api/v1/",config.gateway).href;
    }

    this.lock = new Mutex()

    if (config.debug) {
      SentryInit({
        dsn: 'https://1a411b6bfed244de8f6a7d64bb432bd4@o1011868.ingest.sentry.io/6081085',
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

  async downloadDID (did: string) {
    await this.login();
    const file = await getFile(did, this.provider);
    this.appAddress = file.app;
    const downloader = new Downloader(this.appAddress, this.provider, this.api, this.lock, this.debug);
    await downloader.download(did);
  };

  getUploader = async () => {
    await this.login();
    return new Uploader(this.appId, this.appAddress, this.provider, this.api, this.lock, this.debug);
  };

  getAccess = async (): Promise<FileAPI> => {
    return this.files;
  };

  getDownloader = async (): Promise<Downloader> => {
    await this.login();
    return new Downloader(this.appAddress, this.provider, this.api, this.lock, this.debug);
  };

  makeMetadataURL = async (title: string, description: string, did: string, file: File) => {
    await this.login();
		// throw error if any input is empty
		if (title === '' || description === '' || did === '' || file === null) {
			throw new Error('Please fill in all the fields');
		}
    // get signer from provider
    const signer = this.provider.getSigner();
    const signature = await signer.signMessage(`Sign this message to attach NFT metadata with your did ${did}`);
    const node = await this.api.get('/get-node-address/?appid=' + this.appId);
    const api = axios.create({
      baseURL: node.data.host,
      headers: {
        Authorization: `Bearer ${did}-${signature}`,
      },
    });
    const form = new FormData();
    form.append('file', file);
    const res = await api.post(`api/v1/nft`, form);
    if (!res.data.success) {
      throw new Error('Error uploading image');
    }

    let subDomain = ".";
    switch ( this.chainId ) {
      case 40405 :
        subDomain += "beta";
        break;
      case 40404 :
        subDomain += "dev";
        break;
    }

    const externalURL = `https://nft-viewer${subDomain}.arcana.network/asset/${did}`;

    const res2 = await api.post('/api/v1/metadata', {
      title,
      description,
      did,
      external_url: externalURL,
      image: res.request.responseURL + '/' + did,
    });
    return res2.request.responseURL + '/' + did;
  };

  login = () => {
    // Already initialised or initialisation in progress
    if (!this.initialisedPromise) {
      this.initialisedPromise = this._login()
    }
    return this.initialisedPromise;
  }

  private _login = async () => {
    if (!this.provider) {
      // @ts-ignore
      if (window.ethereum) {
        throw customError;
      }
    }

    // Fetch chain id from provider
    const network = await this.provider.getNetwork();
    const hexChainID = '0x' + this.chainId.toString(16)

    // throw error if chain id is not equal to the chain id of the app
    if (this.chainId !== network.chainId) {
      try {
        await this.provider.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: hexChainID }],
        });
      } catch (e) {
        // This error code indicates that the chain has not been added to the wallet.
        if (e.code === 4902) {
          const blockchainURL = chainIdToBlockchainExplorerURL.get(this.chainId)
          await this.provider.provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: hexChainID,
                chainName: 'Arcana',

                rpcUrls: [chainIdToRPCURL.get(this.chainId)],
                blockExplorerUrls: blockchainURL ? [blockchainURL] : [],


                nativeCurrency: {
                  symbol: 'XAR',
                  // ?
                  decimals: 18
                }
              }
            ]
          })
        } else {
          throw e
        }
      }
    }

    let res = (await axios.get(this.gateway + 'get-config/')).data;
    localStorage.setItem('forwarder', res.Forwarder);
    localStorage.setItem('dkg', res.DKG);
    localStorage.setItem('did', res.DID);
    const accounts = await this.provider.send('eth_requestAccounts', []);
    const nonce = (await axios.get(this.gateway + `get-nonce/?address=${accounts[0]}`)).data;
    const signer = await this.provider.getSigner();
    const sig = await signer.signMessage(String(nonce));
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
        throw new Error('app_not_found');
      }
    }

    this.files = new FileAPI(this.appAddress,this.appId, this.provider, this.api, this.lock, this.debug)
    // Identify user with Segment
    await SegmentAnalytics.identify(accounts[0])
  };

  // TODO: remove when breaking backward compatibility
  numOfMyFiles = () => {
    return this.files.numOfMyFiles()
  }

  numOfMyFilesPages = async (pageSize: number = 20) => {
    return this.files.numOfMyFilesPages(pageSize)
  }

  myFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    return this.files.myFiles(pageNumber, pageSize)
  }

  numOfSharedFiles = () => {
    return this.files.numOfSharedFiles()
  }

  numOfSharedFilesPages = async (pageSize: number = 20) => {
    return this.files.numOfSharedFilesPages(pageSize)
  }

  sharedFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    return this.files.sharedFiles(pageNumber, pageSize)
  }

  linkNft = async (fileId:string, tokenId: number, nftContract:string, nftChainID: number) => {
    await this.login();
    fileId = parseHex(fileId);
    nftContract = parseHex(nftContract);
    return await makeTx(this.appAddress, this.api, this.provider  , 'linkNFT', [fileId, tokenId, nftContract, nftChainID]);
  }

  upload = async (fileRaw: any, onProgress: (bytesUploaded: number, bytesTotal: number) => void): Promise<string> => {
    const uploader = await this.getUploader();

    if (onProgress != null) {
      uploader.onProgress = onProgress;
    }

    return new Promise((resolve, reject) => {
      uploader.onError = reject;
      uploader.upload(fileRaw).then(resolve).catch(reject);
    });
  }

  download = async (did: any, onProgress: (bytesDownloaded: number, bytesTotal: number) => Promise<void> ): Promise<void> => {
    const downloader = await this.getDownloader();

    if (onProgress != null) {
      downloader.onProgress = onProgress;
    }

    return downloader.download(did)
  }
}
export { AccessTypeEnum } from './fileAPI'
