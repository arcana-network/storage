import axios, { AxiosInstance } from 'axios'
import { init as SentryInit } from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { Mutex } from 'async-mutex'

import { Uploader } from './Uploader'
import { Downloader } from './Downloader'
import { FileAPI } from './fileAPI'
import type { UploadParams } from './types'
import { Config, customError, getProvider, makeTx, parseHex, isPermissionRequired } from './Utils'
import { chainId, chainIdToBlockchainExplorerURL, chainIdToGateway, chainIdToRPCURL } from './constant'
import { wrapInstance } from './sentry'
import { errorCodes } from './errors'
import { id } from 'ethers/lib/utils'

export class StorageProvider {
  // private provider: providers.Web3Provider;
  private readonly provider: any
  private readonly email: string
  private api: AxiosInstance
  private appAddress: string
  private readonly appId: number
  private readonly gateway: string
  private readonly chainId: number
  private readonly debug: boolean
  private readonly lock: Mutex
  private initialisedPromise: Promise<void>

  public files: FileAPI

  static async init (cfg: Config) {
    const sp = new StorageProvider(cfg)
    await sp.login()
    return sp
  }

  constructor (cfg: Config) {
    let config
    if (cfg) {
      config = cfg
    } else {
      config = {}
    }

    // If provider is provided by the user, use that provider
    if (config.provider) {
      this.provider = getProvider(config.provider)
      // @ts-ignore
    } else if (window.arcana?.provider != null) {
      // @ts-ignore
      this.provider = getProvider(window.arcana.provider)
      // @ts-ignore
    } else if (window.ethereum != null) {
      // @ts-ignore
      this.provider = getProvider(window.ethereum)
    } else {
      throw customError('INITIALIZATION', errorCodes.wallet_not_found)
    }
    this.email = config.email
    this.appId = config.appId
    if (config.appAddress) {
      this.appAddress = parseHex(config.appAddress)
    }
    if (!config.chainId) {
      this.chainId = chainId
    } else {
      this.chainId = config.chainId
    }
    if (!config.gateway) {
      this.gateway = chainIdToGateway.get(this.chainId)
    } else {
      // Normalize the URL
      this.gateway = new URL(config.gateway).href
    }

    this.lock = new Mutex()

    if (config.debug) {
      SentryInit({
        dsn: 'https://1a411b6bfed244de8f6a7d64bb432bd4@o1011868.ingest.sentry.io/6081085',
        integrations: [
          new Integrations.BrowserTracing({
            tracingOrigins: [this.gateway]
          })
        ],
        tracesSampleRate: 0
      })
      wrapInstance(this)
      this.debug = true
    } else {
      this.debug = false
    }

    this.provider.on('network', (newNetwork, oldNetwork) => {
      if (oldNetwork) {
        this.onNetworkChange(newNetwork, oldNetwork)
      }
    })

    // call onAccountChange when the account changes
    // @ts-ignore
    this.provider.provider.on('accountsChanged', (accounts) => {
      this.onAccountChange(accounts)
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onNetworkChange = (newNetwork, oldNetwork) => {
    // window.location.reload()
  }

  // Reload on account changed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAccountChange = (accounts) => {
    // window.location.reload()
  }

  // TODO: Need to fix this function
  // downloadDID = async (did: string) => {
  //   await this.login()
  //   const file = await getFile(did, this.provider)
  //   this.appAddress = file.app
  //   const downloader = new Downloader(this.appAddress, this.provider, this.api, this.lock, this.debug)
  //   await downloader.download(did)
  // }

  getUploader = async () => {
    await this.login()
    return new Uploader(this.appId, this.appAddress, this.provider, this.api, this.lock, this.debug)
  }

  getAccess = async (): Promise<FileAPI> => {
    await this.login()
    return this.files
  }

  getDownloader = async (): Promise<Downloader> => {
    await this.login()
    return new Downloader(this.appAddress, this.provider, this.api, this.lock, this.debug)
  }

  makeMetadataURL = async (title: string, description: string, did: string, file: File) => {
    await this.login()
    // throw error if any input is empty
    if (title === '' || description === '' || did === '' || file === null) {
      throw new Error('Please fill in all the fields')
    }
    // get signer from provider
    const signer = this.provider.getSigner()
    const signature = await signer.signMessage(`Sign this message to attach NFT metadata with your did ${did}`)
    const node = await this.api.get('/api/v1/get-node-address/', {
      params: {
        appid: this.appId
      }
    })
    const api = axios.create({
      baseURL: node.data.host,
      headers: {
        Authorization: `Bearer ${did}-${signature}`
      }
    })
    const form = new FormData()
    form.append('file', file)
    const res = await api.post('/api/v1/nft', form)
    if (!res.data.success) {
      throw new Error('Error uploading image')
    }

    let subDomain = '.'
    switch (this.chainId) {
      case 40405:
        subDomain += 'beta'
        break
      case 40404:
        subDomain += 'dev'
        break
    }

    const externalURL = `https://nft-viewer${subDomain}.arcana.network/asset/${did}`

    const res2 = await api.post('/api/v1/metadata', {
      title,
      description,
      did,
      external_url: externalURL,
      image: res.request.responseURL + '/' + did
    })
    return res2.request.responseURL + '/' + did
  }

  login = () => {
    // Already initialised or initialisation in progress
    if (!this.initialisedPromise) {
      this.initialisedPromise = this._login()
    }
    return this.initialisedPromise
  }

  private _login = async () => {
    if (!this.provider) {
      // @ts-ignore
      if (window.ethereum) {
        throw customError
      }
    }

    // Fetch chain id from provider
    const network = await this.provider.getNetwork()
    const hexChainID = '0x' + this.chainId.toString(16)

    // throw error if chain id is not equal to the chain id of the app
    if (this.chainId !== network.chainId) {
      try {
        await this.provider.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: hexChainID }]
        })
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

    this.api = axios.create({
      baseURL: this.gateway
    })
    let { data: res } = await this.api.get('/api/v1/get-config/')
    localStorage.setItem('forwarder', res.Forwarder)
    localStorage.setItem('dkg', res.DKG)
    localStorage.setItem('did', res.DID)
    await this.provider.send('eth_requestAccounts', []) // triggers wallet to connect to current page
    const signer = await this.provider.getSigner()
    const addr = await signer.getAddress()
    const { data: nonce } = await this.api.get('/api/v1/get-nonce/', {
      params: {
        address: addr
      }
    })
    const sig = await signer.signMessage(
      `Welcome to Arcana Network!\n\nYou are about to use the Storage SDK.\n\nClick to sign in and accept the Arcana Network Terms of Service (https://bit.ly/3gqh6I7) and Privacy Policy (https://bit.ly/3MMpCgM).\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${addr}\nNonce:\n${id(
        String(nonce)
      ).substring(2, 42)}`
    )
    res = await this.api.post('/api/v1/login/', {
      appAddress: this.appAddress,
      signature: sig,
      email: this.email,
      address: addr
    })
    this.api.defaults.headers.Authorization = `Bearer ${res.data.token}`

    if (this.appId && !this.appAddress) {
      // fetch app address
      res = await this.api.get('/api/v1/get-address/', {
        params: {
          id: this.appId
        }
      })
      if (res.data.address) {
        this.appAddress = parseHex(res.data.address)
      } else {
        throw new Error('app_not_found')
      }
    }

    this.files = new FileAPI(this.appAddress, this.appId, this.provider, this.api, this.lock, this.debug)
  }

  // TODO: remove when breaking backward compatibility
  numOfMyFiles = async () => {
    await this.login()
    return this.files.numOfMyFiles()
  }

  numOfMyFilesPages = async (pageSize: number = 20) => {
    await this.login()
    return this.files.numOfMyFilesPages(pageSize)
  }

  myFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    await this.login()
    return this.files.myFiles(pageNumber, pageSize)
  }

  numOfSharedFiles = async () => {
    await this.login()
    return this.files.numOfSharedFiles()
  }

  numOfSharedFilesPages = async (pageSize: number = 20) => {
    await this.login()
    return this.files.numOfSharedFilesPages(pageSize)
  }

  sharedFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    await this.login()
    return this.files.sharedFiles(pageNumber, pageSize)
  }

  linkNft = async (fileId: string, tokenId: number, nftContract: string, nftChainID: number) => {
    await this.login()
    fileId = parseHex(fileId)
    nftContract = parseHex(nftContract)
    return await makeTx(this.appAddress, this.api, this.provider, 'linkNFT', [
      fileId,
      tokenId,
      nftContract,
      nftChainID
    ])
  }

  upload = async (
    fileRaw: any,
    params: UploadParams & {
      onProgress: (bytesUploaded: number, bytesTotal: number) => void;
    } = {
      onProgress: () => null,
      chunkSize: 10 * 2 ** 20,
      publicFile: false
    }
  ): Promise<string> => {
    const uploader = await this.getUploader()
    if (params.onProgress != null) {
      uploader.onProgress = params.onProgress
    }

    return new Promise((resolve, reject) => {
      uploader.onError = reject
      uploader.upload(fileRaw, params).then(resolve).catch(reject)
    })
  }

  download = async (
    did: any,
    onProgress: (bytesDownloaded: number, bytesTotal: number) => Promise<void>
  ): Promise<void> => {
    const downloader = await this.getDownloader()

    if (onProgress != null) {
      downloader.onProgress = onProgress
    }

    return downloader.downloadToFilesystem(did)
  }

  getBlob = async (
    did: any,
    onProgress: (bytesDownloaded: number, bytesTotal: number) => Promise<void>
  ): Promise<Blob> => {
    const downloader = await this.getDownloader()

    if (onProgress != null) {
      downloader.onProgress = onProgress
    }

    return downloader.getBlob(did)
  }

  // grant permissions at App
  grantAppPermission = async () => {
    if (!(await this.checkPermission())) {
      throw new Error('Permission already granted for the app')
    }
    return await makeTx(this.appAddress, this.api, this.provider, 'grantAppPermission', [])
  }

  // check app permissions
  checkPermission = async () => {
    await this.login()
    return await isPermissionRequired(this.appAddress, this.provider)
  }
}
export { AccessTypeEnum } from './fileAPI'
