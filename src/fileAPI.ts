import { BigNumber, ethers } from 'ethers'

import { customError, ensureArray, makeTx, metaTxTargets, parseHex } from './Utils'
import { wrapInstance } from './sentry'
import { requiresAllDecorators } from './decorators'
import { Rule } from './types'
import type { StateContainer } from './state'

export enum AccessTypeEnum {
  MY_FILES,
  SHARED_FILES,
}

export class FileAPI {
  private readonly state: StateContainer

  constructor (state: StateContainer, debug: boolean) {
    this.state = state

    if (debug) {
      wrapInstance(this)
    }
  }

  numOfMyFiles = async () => {
    return (
      await this.state.api('/api/v1/files/total/', {
        params: {
          address: this.state.appAddr
        }
      })
    ).data
  }

  numOfAllFiles = async () => {
    return (
      await this.state.api('/api/v1/files/all-users/total/', {
        params: {
          address: this.state.appAddr
        }
      })
    ).data
  }

  numOfMyFilesPages = async (pageSize: number = 20) => {
    const numOfPages = (await this.numOfMyFiles()) / pageSize
    return Math.ceil(numOfPages)
  }

  numOfAllPages = async (pageSize: number = 20) => {
    const numOfPages = (await this.numOfAllFiles()) / pageSize
    return Math.ceil(numOfPages)
  }

  myFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if (pageNumber > (await this.numOfMyFilesPages(pageSize))) {
      throw new Error('invalid_page_number')
    }

    const res = await this.state.api.get('/api/v1/list-files/', {
      params: {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize,
        appid: this.state.appID
      }
    })
    let data = []
    if (res.data) data = res.data
    return data
  }

  numOfSharedFiles = async () => {
    return (await this.state.api('/api/v1/files/shared/total/')).data
  }

  numOfSharedFilesPages = async (pageSize: number = 20) => {
    return Math.ceil((await this.numOfSharedFiles()) / pageSize)
  }

  sharedFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if (pageNumber > (await this.numOfSharedFilesPages(pageSize))) {
      throw new Error('invalid_page_number')
    }
    const res = await this.state.api('/api/v1/shared-files/', {
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

    const {
      data: { host: storageHost }
    } = await this.state.api.get('/api/v1/get-region-endpoint/', {
      params: {
        address: this.state.appAddr
      }
    })
    const u = new URL(storageHost)
    u.pathname = '/api/v2/file/public/' + this.state.appAddr + '/' + ethers.utils.hexlify(_did)
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

  private async updateRuleSet (
    did: string,
    address: string[],
    validity: number[] | null,
    isShare: boolean
  ): Promise<string> {
    const rule = await this.state.didContract.getRuleSet(parseHex(did))
    let data: any[] =
      rule === ethers.constants.HashZero
        ? null
        : (
            await this.state.api.get('/api/v1/get-hash-data/', {
              params: {
                hash: rule
              }
            })
          ).data
    if (data === null) {
      data = []
    }
    if (isShare) {
      data.forEach((e: Rule) => {
        if (address.includes(e.address)) {
          throw customError('TRANSACTION', `File has already been shared with ${e.address}`)
        }
      })
    }
    let rawRule: string = ''
    const add: Rule[] = []
    const remove: string[] = []
    data.forEach((element) => {
      if (!(!isShare && !address.includes(element.address))) {
        rawRule += element.address + element.validity
      }
    })

    for (let i = 0; i < address.length; i++) {
      if (isShare) {
        rawRule += address[i] + validity[i]
        add.push({
          address: address[i],
          validity: validity[i]
        })
      } else {
        remove.push(address[i])
      }
    }
    const ruleHash: string = ethers.utils.id(rawRule)
    const res = await this.state.api.post('/api/v1/update-hash/', {
      did,
      hash: ruleHash,
      add,
      remove,
      app_address: this.state.appAddr
    })
    if (res.data.err) {
      throw customError('TRANSACTION', res.data.err)
    }
    return await makeTx(this.state, metaTxTargets.APPLICATION, 'updateRuleSet', [did, ruleHash])
  }

  @requiresAllDecorators
  async share (did: string, _address: string[] | string, validity: number[] | number | null): Promise<string> {
    did = parseHex(did)
    const address: string[] = ensureArray(_address).map(parseHex)

    let actualValidity: number[] = []
    if (Array.isArray(validity)) {
      if (!validity.every((x) => BigNumber.isBigNumber(x) || Number.isFinite(x))) {
        throw customError('TRANSACTION', 'Invalid argument passed to validity. Values must be a Number or a BigNumber')
      }
      actualValidity = validity
      if (address.length !== validity.length) {
        throw customError('TRANSACTION', 'Invalid argument passed. Address and validity must be of same length')
      }
    } else if (Number.isFinite(validity)) {
      for (let i = 0; i < address.length; i++) actualValidity.push(validity)
    } else if (validity == null) {
      for (let i = 0; i < address.length; i++) actualValidity.push(-1)
    } else {
      throw customError('TRANSACTION', 'Validity must be undefined or an array.')
    }

    return await this.updateRuleSet(did, address, actualValidity, true)
  }

  @requiresAllDecorators
  async revoke (did: string, address: string | string[]): Promise<string> {
    did = parseHex(did)
    address = ensureArray(address).map(parseHex)
    return await this.updateRuleSet(did, address, null, false)
  }

  @requiresAllDecorators
  async changeOwner (did: string, newOwnerAddress: string): Promise<string> {
    did = parseHex(did)
    newOwnerAddress = parseHex(newOwnerAddress)
    return makeTx(this.state, metaTxTargets.APPLICATION, 'changeFileOwner', [did, newOwnerAddress])
  }

  changeFileOwner = (did, newOwnerAddress: string): Promise<string> => {
    return this.changeOwner(did, newOwnerAddress)
  }

  @requiresAllDecorators
  async delete (did: string): Promise<string> {
    did = parseHex(did)
    return makeTx(this.state, metaTxTargets.DID, 'deleteFile', [did])
  }

  @requiresAllDecorators
  async removeFile (did: string): Promise<string> {
    did = parseHex(did)
    return makeTx(this.state, metaTxTargets.APPLICATION, 'removeUserFile', [did])
  }

  removeFileFromApp = (did: string): Promise<string> => {
    return this.removeFile(did)
  }

  deleteFile = (did: string): Promise<string> => {
    return this.delete(did)
  }

  @requiresAllDecorators
  async deleteAccount () {
    return await makeTx(this.state, metaTxTargets.APPLICATION, 'deleteAccount', [])
  }

  getAccountStatus = async () => {
    return this.state.appContract.status(this.state.provider.getSigner().getAddress())
  }

  getUploadLimit = async (): Promise<[number, number]> => {
    const self = this.state.provider.getSigner().getAddress()
    const con = await this.state.appContract.consumption(self)
    const limit = await this.state.appContract.limit(self)
    const defaultLimit = await this.state.appContract.defaultLimit()

    return [con.store.toNumber(), Math.max(limit.store.toNumber(), defaultLimit.store.toNumber())]
  }

  getDownloadLimit = async (): Promise<[number, number]> => {
    const self = this.state.provider.getSigner().getAddress()
    const con = await this.state.appContract.consumption(self)
    const limit = await this.state.appContract.limit(self)
    const defaultLimit = await this.state.appContract.defaultLimit()

    return [con.bandwidth.toNumber(), Math.max(limit.bandwidth.toNumber(), defaultLimit.bandwidth.toNumber())]
  }

  getSharedUsers = async (did: string): Promise<string[]> => {
    const realDID = parseHex(did)
    let users = (
      await this.state.api.get('/api/v1/shared-users/', {
        params: {
          did: realDID
        }
      })
    ).data
    if (users === null) {
      users = []
    }
    return users.filter((d) => d !== ethers.constants.AddressZero)
  }

  all = async (pageNumber: number = 1, pageSize: number = 20): Promise<string[]> => {
    if (pageNumber > (await this.numOfAllPages(pageSize))) {
      throw new Error('invalid_page_number')
    }

    const res = await this.state.api.get('/api/v1/files/all-users/', {
      params: {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize,
        address: this.state.appAddr
      }
    })
    let data = []
    if (res.data) data = res.data
    return data
  }
}
