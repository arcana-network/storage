import axios from 'axios'
import { init as SentryInit } from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { Mutex } from 'async-mutex'
import * as ethers from 'ethers'

import { Uploader } from './Uploader'
import { Downloader } from './Downloader'
import { FileAPI } from './fileAPI'
import type { UploadParams } from './types'
import { Config, customError, getProvider, isPermissionRequired, makeTx, metaTxTargets, parseHex } from './Utils'
import { chainId, chainIdToGateway } from './constant'
import { StateContainer } from './state'
import { requiresArcanaNetwork } from './decorators'
import { wrapInstance } from './sentry'
import { errorCodes } from './errors'

import ArcanaABI from './contracts/Arcana'
import DKGABI from './contracts/DKG'
import DIDABI from './contracts/DID'
import ForwarderABI from './contracts/Forwarder'

export class StorageProvider {
  // private provider: providers.Web3Provider;
  private readonly email: string
  private readonly debug: boolean
  private readonly state: StateContainer
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
    this.state = new StateContainer()

    // If provider is provided by the user, use that provider
    if (config.provider) {
      this.state.provider = getProvider(config.provider)
      // @ts-ignore
    } else if (window.arcana?.provider != null) {
      // @ts-ignore
      this.state.provider = getProvider(window.arcana.provider)
      // @ts-ignore
    } else if (window.ethereum != null) {
      // @ts-ignore
      this.state.provider = getProvider(window.ethereum)
    } else {
      throw customError('INITIALIZATION', errorCodes.wallet_not_found)
    }
    this.email = config.email
    this.state.appID = config.appId
    if (config.appAddress) {
      this.state.appAddr = parseHex(config.appAddress)
    }
    if (!config.chainId) {
      this.state.chainID = chainId
    } else {
      this.state.chainID = config.chainId
    }
    if (!config.gateway) {
      this.state.gatewayURL = chainIdToGateway.get(this.state.chainID)
    } else {
      // Normalize the URL
      this.state.gatewayURL = new URL(config.gateway).href
    }

    this.state.lock = new Mutex()

    if (config.debug) {
      SentryInit({
        dsn: 'https://1a411b6bfed244de8f6a7d64bb432bd4@o1011868.ingest.sentry.io/6081085',
        integrations: [
          new Integrations.BrowserTracing({
            tracingOrigins: [this.state.gatewayURL]
          })
        ],
        tracesSampleRate: 0
      })
      wrapInstance(this)
      this.debug = true
    } else {
      this.debug = false
    }

    this.state.provider.on('network', (newNetwork, oldNetwork) => {
      if (oldNetwork) {
        this.onNetworkChange(newNetwork, oldNetwork)
      }
    })

    // call onAccountChange when the account changes
    this.state.provider.on('accountsChanged', (accounts) => {
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

  downloadNFT = async (did: string) => {
    await this.login()
    const downloader = new Downloader(this.state, this.debug, {
      isNFT: true
    })
    await downloader.download(did)
  }

  getUploader = async () => {
    await this.login()
    return new Uploader(this.state, this.debug)
  }

  getAccess = async (): Promise<FileAPI> => {
    await this.login()
    return this.files
  }

  getDownloader = async (): Promise<Downloader> => {
    await this.login()
    return new Downloader(this.state, this.debug, {
      isNFT: false
    })
  }

  makeMetadataURL = async (title: string, description: string, did: string, file: File) => {
    await this.login()
    // throw error if any input is empty
    if (title === '' || description === '' || did === '' || file === null) {
      throw new Error('Please fill in all the fields')
    }
    // get signer from provider
    const signer = this.state.provider.getSigner()
    const signature = await signer.signMessage(`Sign this message to attach NFT metadata with your did ${did}`)
    const node = await this.state.api.get('/api/v1/get-node-address/', {
      params: {
        appid: this.state.appID
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
    switch (this.state.chainID) {
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

  @requiresArcanaNetwork
  private async _login () {
    if (!this.state.provider) {
      // @ts-ignore
      if (window.ethereum) {
        throw customError
      }
    }

    this.state.api = axios.create({
      baseURL: this.state.gatewayURL
    })
    let { data: res } = await this.state.api.get('/api/v1/get-config/')

    this.state.forwarderContract = new ethers.Contract(res.Forwarder, ForwarderABI.abi, this.state.provider)
    this.state.forwarderContractAddr = res.Forwarder

    this.state.dkgContract = new ethers.Contract(res.DKG, DKGABI.abi, this.state.provider)
    this.state.dkgContractAddr = res.DKG

    this.state.didContract = new ethers.Contract(res.DID, DIDABI.abi, this.state.provider)
    this.state.didContractAddr = res.DID

    await this.state.provider.send('eth_requestAccounts', []) // triggers wallet to connect to current page
    const signer = await this.state.provider.getSigner()
    const addr = await signer.getAddress()
    const { data: nonce } = await this.state.api.get('/api/v1/get-nonce/', {
      params: {
        address: addr
      }
    })
    const sig = await signer.signMessage(
      `Welcome to Arcana Network!\n\nYou are about to use the Storage SDK.\n\nClick to sign in and accept the Arcana Network Terms of Service (https://bit.ly/3gqh6I7) and Privacy Policy (https://bit.ly/3MMpCgM).\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${addr}\nNonce:\n${ethers.utils
        .id(String(nonce))
        .substring(2, 42)}`
    )
    res = await this.state.api.post('/api/v1/login/', {
      appAddress: this.state.appAddr,
      signature: sig,
      email: this.email,
      address: addr
    })
    this.state.api.defaults.headers.Authorization = `Bearer ${res.data.token}`

    if (this.state.appID && !this.state.appAddr) {
      // fetch app address
      res = await this.state.api.get('/api/v1/get-address/', {
        params: {
          id: this.state.appID
        }
      })
      if (res.data.address) {
        this.state.appAddr = parseHex(res.data.address)
        this.state.appContract = new ethers.Contract(this.state.appAddr, ArcanaABI.abi, this.state.provider)
      } else {
        throw new Error('app_not_found')
      }
    } else {
      this.state.appContract = new ethers.Contract(this.state.appAddr, ArcanaABI.abi, this.state.provider)
    }

    this.files = new FileAPI(this.state, this.debug)
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

    return makeTx(this.state, metaTxTargets.APPLICATION, 'linkNFT', [fileId, tokenId, nftContract, nftChainID])
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
    return makeTx(this.state, metaTxTargets.APPLICATION, 'grantAppPermission', [])
  }

  // check app permissions
  checkPermission = async () => {
    await this.login()
    return isPermissionRequired(this.state)
  }
}
export { AccessTypeEnum } from './fileAPI'
