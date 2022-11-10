import axios from 'axios'
import { join } from 'shamir'
import { id, parseBytes32String } from 'ethers/lib/utils'
import { decrypt, utils as eciesUtils } from 'eciesjs'

import Decryptor from './decrypt'
import { AESDecrypt, AESDecryptHex, customError, getFile, hasher2Hex, makeTx, metaTxTargets } from './Utils'
import { utils, Wallet } from 'ethers'
import FileWriter from './FileWriter'
import Sha256 from './SHA256'

import { wrapInstance } from './sentry'
import { requiresLocking } from './locking'
import { errorCodes } from './errors'
import type { StateContainer } from './state'

const downloadBlob = (blob, fileName) => {
  // @ts-ignore
  if (navigator.msSaveBlob) {
    // IE 10+
    // @ts-ignore
    navigator.msSaveBlob(blob, fileName)
  } else {
    const link = document.createElement('a')
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', fileName)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

export function createAndDownloadBlobFile (body, filename) {
  const blob = new Blob([body])
  downloadBlob(blob, filename)
}

export class Downloader {
  private readonly hasher
  private readonly state: StateContainer

  constructor (state: StateContainer, debug: boolean) {
    this.hasher = new Sha256()
    this.state = state

    if (debug) {
      wrapInstance(this)
    }
  }

  onSuccess = async () => {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onProgress = async (bytesDownloaded: number, bytesTotal: number): Promise<void> => {}

  @requiresLocking
  private async _download (did, accessType: 'view' | 'download'): Promise<void | Blob> {
    did = did.substring(0, 2) !== '0x' ? '0x' + did : did
    const didBytes = utils.arrayify(did)
    const file = await getFile(this.state, did)

    const chunkSize = 10 * 2 ** 20
    let fileWriter

    switch (didBytes[0]) {
      // Public File
      case 0x01: {
        if (file.name[2] === '0') {
          file.name = parseBytes32String('0x' + file.name.substring(2) + '0')
        } else {
          const { data: name } = await this.state.api.get('/api/v1/file-name/', {
            params: {
              did
            }
          })
          file.name = name
        }
        fileWriter = new FileWriter(file.name, accessType)
        const { data: { host: storageHost } } = await this.state.api.get('/api/v1/get-region-endpoint/', {
          params: {
            address: this.state.appAddr
          }
        })

        const u = new URL(storageHost)
        u.pathname = '/api/v2/file/public/' + this.state.appAddr + '/' + did
        let downloaded = 0
        for (let i = 0; i < file.size; i += chunkSize) {
          const range = `bytes=${i}-${Math.min(i + chunkSize, file.size) - 1}`
          const { data } = await axios({
            method: 'GET',
            url: u.href,
            headers: {
              Range: range
            },
            responseType: 'arraybuffer'
          })
          await fileWriter.write(data, i)
          this.hasher.update(data)
          downloaded += data.byteLength
          await this.onProgress(downloaded, file.size)
        }
        break
      }
      // Private file
      case 0x02: {
        const ephemeralWallet = await Wallet.createRandom()
        const checkPermissionResp = await makeTx(this.state, metaTxTargets.APPLICATION, 'download', [
          did,
          ephemeralWallet.address
        ])
        const txHash = checkPermissionResp.txHash

        const shares = {}
        const nodes = await this.state.dkgContract.getCurrentEpochDetails()
        for (let i = 0; i < nodes.length; i++) {
          const sigParams = JSON.stringify({ tx_hash: txHash })
          const hash = id(sigParams)
          const res = await axios.post('https://' + nodes[i].declaredIp + '/rpc', {
            jsonrpc: '2.0',
            method: 'RetrieveKeyShare',
            id: 10,
            params: {
              tx_hash: txHash,
              signature: await ephemeralWallet.signMessage(hash)
            }
          })
          if (res.data.error) {
            // tslint:disable-next-line:no-console
            console.log(res.data.error.message, '\n', res.data.error.data)
            continue
          }
          const sh = res.data.result.share
          shares[i + 1] = decrypt(ephemeralWallet.privateKey, eciesUtils.decodeHex(sh))
        }
        const decryptedKey = join(shares)
        const key = await window.crypto.subtle.importKey('raw', decryptedKey, 'AES-CTR', false, ['encrypt', 'decrypt'])
        file.hash = await AESDecryptHex(key, file.hash.replace('0x', ''))
        file.name = await AESDecryptHex(key, file.name.replace('0x', ''))
        if (file.name[0] === '0') {
          file.name = parseBytes32String('0x' + file.name.substring(1) + '0')
        } else {
          const { data: fileNameEncrypted } = await this.state.api.get('/api/v1/file-name/', {
            params: {
              did
            }
          })
          file.name = await AESDecrypt(key, fileNameEncrypted)
        }
        fileWriter = new FileWriter(file.name, accessType)
        const Dec = new Decryptor(key)
        let downloaded = 0
        for (let i = 0; i < file.size; i += chunkSize) {
          const range = `bytes=${i}-${Math.min(i + chunkSize, file.size) - 1}`
          const download = await fetch(checkPermissionResp.host + `api/v2/file/${did}`, {
            headers: {
              Range: range,
              Authorization: `Bearer ${checkPermissionResp.token}`
            }
          })
          const buff = await download.arrayBuffer()
          const dec = await Dec.decrypt(buff, i)
          await fileWriter.write(dec, i)
          this.hasher.update(dec)
          downloaded += dec.byteLength
          await this.onProgress(downloaded, file.size)
        }
        break
      }
      default:
        throw customError('TRANSACTION', errorCodes.reserved_did_prefix)
    }

    const decryptedHash = hasher2Hex(this.hasher.digest())
    const success = file.hash.replace('0x', '') === decryptedHash
    if (success) {
      const out = await fileWriter.createDownload()
      await this.onSuccess()
      return out
    } else {
      console.log(file.hash, decryptedHash)
      throw new Error('Hash does not match the uploaded file')
    }
  }

  // TODO - Remove during API breaking changes
  // @deprecated - Use downloadToFilesystem
  public download (did) {
    return this._download(did, 'download')
  }

  public downloadToFilesystem (did): Promise<void> {
    return this._download(did, 'download') as Promise<void>
  }

  public getBlob (did): Promise<Blob> {
    return this._download(did, 'view') as Promise<Blob>
  }
}
