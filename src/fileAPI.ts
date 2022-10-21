import { AxiosInstance } from 'axios'
import { BigNumber, ethers } from 'ethers'
import { Mutex } from 'async-mutex'

import { readHash } from './constant'
import { makeTx, parseHex,DIDContract, Arcana, customError, ensureArray, getAppAddress } from './Utils'
import { wrapInstance } from './sentry'
import { requiresLocking } from './locking'

export enum AccessTypeEnum {
  MY_FILES,
  SHARED_FILES
}

export class FileAPI {
  private provider: any
  private api: AxiosInstance
  private appAddress: string
  private appId: number
  private readonly lock: Mutex

  constructor (appAddress: string, appId:number, provider: any, api: AxiosInstance, lock: Mutex, debug: boolean) {
    this.provider = provider
    this.api = api
    this.appAddress = appAddress
    this.appId = appId
    this.lock = lock

    if (debug) {
      wrapInstance(this)
    }
  }

  setAppAddress = async (did: string) => {
    // if app address is not set then fetch it from the did and set it
    if (!this.appAddress) {
      this.appAddress = await getAppAddress(parseHex(did), this.provider)
    }
  }

  numOfMyFiles = async () => {
    return (await this.api('files/total/')).data
  }

  numOfMyFilesPages = async (pageSize: number = 20) => {
    const numOfPages = (await this.numOfMyFiles()) / pageSize
    return Math.ceil(numOfPages)
  }

  myFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if (pageNumber > await this.numOfMyFilesPages(pageSize)) {
      throw new Error('invalid_page_number')
    }

    const res = await this.api.get('list-files/', {
      params: {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize,
        appid: this.appId
      }
    })
    let data = []
    if (res.data) data = res.data
    return data
  }

  numOfSharedFiles = async () => {
    return (await this.api('files/shared/total/')).data
  }

  numOfSharedFilesPages = async (pageSize: number = 20) => {
    return Math.ceil((await this.numOfSharedFiles()) / pageSize)
  }

  sharedFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if (pageNumber > await this.numOfSharedFilesPages(pageSize)) {
      throw new Error('invalid_page_number')
    }
    const res = await this.api('shared-files/', {
      params: {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize
      }
    })
    let data = []
    if (res.data) data = res.data
    return data
  }

  getPublicFileURL = async (did: string) => {
    const _did = ethers.utils.arrayify(parseHex(did))
    if (_did[0] !== 0x01) {
      throw customError('TRANSACTION', 'Public URLs are only available for Public Files.')
    }

    const { data: { host: storageHost } } = await this.api.get('/get-region-endpoint/', {
      params: {
        address: this.appAddress
      }
    })
    const u = new URL(storageHost)
    u.pathname = '/api/v2/file/public/' + this.appAddress + '/' + ethers.utils.hexlify(_did)
    return u.href
  }

  list = (type: AccessTypeEnum, pageNumber: number = 1, pageSize: number = 20) => {
    if (typeof type !== 'number') {
      throw customError('TRANSACTION', 'Invalid argument passed to list. Type must be a number.')
    }

    switch (type) {
      case AccessTypeEnum.MY_FILES:
        return this.myFiles(pageNumber, pageSize)
      case AccessTypeEnum.SHARED_FILES:
        return this.sharedFiles(pageNumber, pageSize)
      default:
        throw customError('TRANSACTION', 'Invalid argument passed to list. Type must be in AccessTypeEnum.')
    }
  }

  @requiresLocking
  async share (did: string[] | string, _address: string[] | string, validity: number[] | number | null): Promise<string> {
    did = ensureArray(did).map(parseHex)
    await this.setAppAddress(did[0])
    const address = ensureArray(_address).map(parseHex)
    const accessType = []
    did.forEach(() => {
      address.forEach(() => {
        accessType.push(readHash)
      })
    })

    let actualValidity
    if (Array.isArray(validity)) {
      if (!validity.every(x => BigNumber.isBigNumber(x) || Number.isFinite(x))) {
        throw customError('TRANSACTION', 'Invalid argument passed to validity. Values must be a Number or a BigNumber')
      }
      actualValidity = validity
    } else if (Number.isFinite(validity)) {
      actualValidity = [validity]
    } else if (validity == null) {
      // subtracting current time from max time with 1000 seconds as buffer, becuase in smart contract we are adding validity with current timestamp
      actualValidity = [
        ethers.constants.MaxUint256.sub(
          BigNumber.from(
            Math.floor(new Date().getTime() / 1000) + 1000)
        )
      ]
    } else {
      throw customError('TRANSACTION', 'Validity must be undefined or an array.')
    }
    return await makeTx(this.appAddress, this.api, this.provider, 'share', [
      did,
      address,
      accessType,
      actualValidity
    ])
  };

  @requiresLocking
  async revoke (did: string, address: string): Promise<string> {
    did = parseHex(did)
    await this.setAppAddress(did)
    address = parseHex(address)
    return await makeTx(this.appAddress, this.api, this.provider, 'revoke', [did, address, readHash])
  };

  @requiresLocking
  async changeOwner (did: string, newOwnerAddress: string): Promise<string> {
    did = parseHex(did)
    await this.setAppAddress(did)
    newOwnerAddress = parseHex(newOwnerAddress)
    return await makeTx(this.appAddress, this.api, this.provider, 'changeFileOwner', [did, newOwnerAddress])
  };

  changeFileOwner = (did, newOwnerAddress: string): Promise<string> => {
    return this.changeOwner(did, newOwnerAddress)
  }

  @requiresLocking
  async delete (did: string): Promise<string> {
    await this.setAppAddress(did)
    did = parseHex(did)
    const contract = DIDContract(localStorage.getItem('did'),this.provider)
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteFile', [did],contract)
  };

  @requiresLocking
  async removeFile(did:string) : Promise<string> {
    await this.setAppAddress(did);
    did = parseHex(did)
    return await makeTx(this.appAddress, this.api, this.provider, 'removeUserFile', [did])
  }

  removeFileFromApp = async (did: string) : Promise<string> => {
    return this.removeFile(did);
  }

  deleteFile = (did: string): Promise<string> => {
    return this.delete(did)
  }

  @requiresLocking
  async deleteAccount () {
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteAccount', [])
  };

  getAccountStatus = async () => {
    const arcana = Arcana(this.appAddress, this.provider)
    return arcana.status(await this.provider.getAddress())
  }

  getUploadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider)
    const con = await arcana.consumption((await this.provider.listAccounts())[0])
    const limit = await arcana.limit((await this.provider.listAccounts())[0])
    const defaultLimit = await arcana.defaultLimit()
    return [con.store.toNumber(), Math.max(limit.store.toNumber(), defaultLimit.store.toNumber())]
  }

  getDownloadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider)
    const con = await arcana.consumption((await this.provider.listAccounts())[0])
    const limit = await arcana.limit((await this.provider.listAccounts())[0])
    const defaultLimit = await arcana.defaultLimit()
    return [con.bandwidth.toNumber(), Math.max(limit.bandwidth.toNumber(), defaultLimit.bandwidth.toNumber())]
  }

  getSharedUsers = async (did: string): Promise<string[]> => {
    const realDID = parseHex(did)
    await this.setAppAddress(realDID)
    const users = (await this.api.get('/shared-users/?did=' + realDID)).data
    return users.filter((d) => d !== ethers.constants.AddressZero)
  }
}
