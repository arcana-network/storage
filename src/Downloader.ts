import Decryptor from './decrypt';
import { Arcana, hasher2Hex, AESDecrypt, makeTx, customError, getDKGNodes, getFile } from './Utils';
import { utils, Wallet } from 'ethers';
import FileWriter from './FileWriter';
import Sha256 from './SHA256';
import axios, { AxiosInstance } from 'axios';
import { join } from 'shamir';
import { id } from 'ethers/lib/utils';
import { decodeHex } from 'eciesjs/dist/utils';
import { decrypt } from 'eciesjs';
import { Mutex } from 'async-mutex';

import { wrapInstance } from './sentry';
import { requiresLocking } from './locking';
import { errorCodes } from './errors';

const downloadBlob = (blob, fileName) => {
  // @ts-ignore
  if (navigator.msSaveBlob) {
    // IE 10+
    // @ts-ignore
    navigator.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement('a');
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export function createAndDownloadBlobFile(body, filename) {
  const blob = new Blob([body]);
  downloadBlob(blob, filename);
}

export class Downloader {
  private readonly provider: any;
  private hasher;
  private readonly api: AxiosInstance;
  private readonly appAddress: string;
  private readonly lock: Mutex;

  constructor(appAddress: string, provider: any, api: AxiosInstance, lock: Mutex, debug: boolean) {
    this.provider = provider;
    this.hasher = new Sha256();
    this.api = api;
    this.appAddress = appAddress;
    this.lock = lock;

    if (debug) {
      wrapInstance(this);
    }
  }

  onSuccess = async () => {};
  onProgress = async (bytesDownloaded: number, bytesTotal: number): Promise<void> => {};

  @requiresLocking
  private async _download(did, accessType: 'view' | 'download'): Promise<void | Blob> {
    did = did.substring(0, 2) !== '0x' ? '0x' + did : did;
    const didBytes = utils.arrayify(did);
    const file = await getFile(did, this.provider);

    const chunkSize = 10 * 2 ** 20;
    let fileMeta;
    let fileWriter;

    switch (didBytes[0]) {
      // Public File
      case 0x01: {
        fileMeta = JSON.parse(Buffer.from(file.encryptedMetaData.slice(2), 'hex').toString('utf-8'));
        fileWriter = new FileWriter(fileMeta.name, accessType);
        const {
          data: { host: storageHost },
        } = await this.api.get('/get-region-endpoint/', {
          params: {
            address: this.appAddress,
          },
        });

        const u = new URL(storageHost);
        u.pathname = '/api/v2/file/public/' + this.appAddress + '/' + did;

        let downloaded = 0;
        for (let i = 0; i < fileMeta.size; i += chunkSize) {
          const range = `bytes=${i}-${Math.min(i + chunkSize, fileMeta.size) - 1}`;
          const { data } = await axios({
            method: 'GET',
            url: u.href,
            headers: {
              Range: range,
            },
            responseType: 'arraybuffer',
          });
          await fileWriter.write(data, i);
          this.hasher.update(data);
          downloaded += data.byteLength;
          await this.onProgress(downloaded, fileMeta.size);
        }
        break;
      }
      // Private file
      case 0x02: {
        const ephemeralWallet = await Wallet.createRandom();
        console.log('before download transaction');
        const checkPermissionResp = await makeTx(this.appAddress, this.api, this.provider, 'download', [
          did,
          ephemeralWallet.address,
        ]);
        console.log('done with download transaction');
        const txHash = checkPermissionResp.txHash;

        const shares = {};
        const nodes = await getDKGNodes(this.provider);
        for (let i = 0; i < nodes.length; i++) {
          const res = await axios.post('https://' + nodes[i].declaredIp + '/rpc', {
            jsonrpc: '2.0',
            method: 'RetrieveKeyShare',
            id: 10,
            params: {
              tx_hash: txHash,
              signature: await ephemeralWallet.signMessage(id(JSON.stringify({ tx_hash: txHash }))),
            },
          });
          if (res.data.error) {
            // tslint:disable-next-line:no-console
            console.log(res.data.error.message, '\n', res.data.error.data);
            continue;
          }
          const sh = res.data.result.share;
          shares[i + 1] = decrypt(ephemeralWallet.privateKey, decodeHex(sh));
        }
        const decryptedKey = join(shares);

        const key = await window.crypto.subtle.importKey('raw', decryptedKey, 'AES-CTR', false, ['encrypt', 'decrypt']);

        fileMeta = JSON.parse(await AESDecrypt(key, utils.toUtf8String(file.encryptedMetaData)));
        fileWriter = new FileWriter(fileMeta.name, accessType);
        const Dec = new Decryptor(key);

        let downloaded = 0;
        for (let i = 0; i < fileMeta.size; i += chunkSize) {
          const range = `bytes=${i}-${Math.min(i + chunkSize, fileMeta.size) - 1}`;
          const download = await fetch(checkPermissionResp.host + `api/v2/file/${did}`, {
            headers: {
              Range: range,
              Authorization: `Bearer ${checkPermissionResp.token}`,
            },
          });
          const buff = await download.arrayBuffer();
          const dec = await Dec.decrypt(buff, i);
          await fileWriter.write(dec, i);
          this.hasher.update(dec);
          downloaded += dec.byteLength;
          await this.onProgress(downloaded, fileMeta.size);
        }
        break;
      }
      default:
        throw customError('TRANSACTION', errorCodes.reserved_did_prefix);
    }

    const decryptedHash = hasher2Hex(this.hasher.digest());
    const success = fileMeta.hash === decryptedHash;
    if (success) {
      const out = await fileWriter.createDownload();
      await this.onSuccess();
      return out;
    } else {
      throw new Error('Hash does not match the uploaded file');
    }
  }

  // TODO - Remove during API breaking changes
  // @deprecated - Use downloadToFilesystem
  public download(did) {
    return this._download(did, 'download');
  }

  public downloadToFilesystem(did): Promise<void> {
    return this._download(did, 'download') as Promise<void>;
  }

  public getBlob(did): Promise<Blob> {
    return this._download(did, 'view') as Promise<Blob>;
  }
}
