import './SHA256';
import Sha256 from './SHA256';
import { Contract, providers, Wallet, utils, Bytes } from 'ethers';
import arcana from './contracts/Arcana';
import dkg from './contracts/DKG';
import forwarder from './contracts/Forwarder';
import { sign } from './signer';
import { Arcana as ArcanaT, Forwarder as ForwarderT, NodeList as NodeListT } from './typechain';
import { AxiosInstance } from 'axios';
import DID from './contracts/DID';
import { Web3Provider } from '@ethersproject/providers';

export type Config = {
  appId: number;
  provider: any;
  email: string;
  gateway: any;
  debug: any;
  chainId: any;
};

export class KeyGen {
  hasher: any;
  file: Blob;
  chunkSize: number;

  constructor(file: Blob, chunkSize = 10 * 2 ** 20) {
    this.file = file;
    this.hasher = new Sha256();
    this.chunkSize = chunkSize;
  }

  async read<T>(position: number, length: number, binary?: boolean): Promise<{ data: T; length: number }> {
    return new Promise((resolve, reject) => {
      this._chunk_reader(position, length, binary, (evt: any) => {
        if (evt.target.error == null) {
          resolve({ data: evt.target.result, length: evt.target.result.byteLength });
        } else {
          reject(evt.target.error);
        }
      });
    });
  }

  private _chunk_reader(offset: number, length: number, binary: boolean, readEventHandler: (evt: any) => void) {
    const r: FileReader = new FileReader();
    let blob;
    if (!(offset === 0 && this.file.size <= length)) {
      blob = this.file.slice(offset, offset + length);
    } else {
      blob = this.file;
    }
    r.onload = readEventHandler;
    if (binary) {
      r.readAsBinaryString(blob);
    } else {
      r.readAsArrayBuffer(blob);
    }
  }

  getKey = async () => {
    await this.getHash();
    return this.hasher.digest().slice(16);
  };

  getHash = async () => {
    let offset = 0;
    while (offset < this.file.size) {
      let data = await this.read(offset, offset + this.chunkSize);
      offset += data.length;
      this.hasher.update(data.data);
    }
    return hasher2Hex(this.hasher.digest());
  };
}

export const hasher2Hex = (digest) => {
  return digest.map((x) => x.toString(16).padStart(2, '0')).join('');
};

export const fromHexString = (hexString: string): Uint8Array =>
  new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

export const toHexString = (bytes: ArrayBuffer): string =>
  new Uint8Array(bytes).reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

export function ensureArray<T>(input: T[] | T): T[] {
  if (!Array.isArray(input)) {
    return [input]
  } else {
    return input
  }
}

interface encryptedI {
  ciphertext: string;
  ephemPublicKey: string;
  iv: string;
  mac: string;
}

export const getProvider = (provider: any) => {
  return new providers.Web3Provider(provider, "any");
};

export const Arcana = (address: string, provider): ArcanaT => {
  return new Contract(address, arcana.abi, provider) as ArcanaT;
};

export const DKG = (address: string, provider): NodeListT => {
  return new Contract(address, dkg.abi, provider) as NodeListT;
};

export const Forwarder = (address: string, provider): ForwarderT => {
  return new Contract(address, forwarder.abi, provider) as ForwarderT;
};

const cleanMessage = (message: string): string => {
  if (!message) return '';
  return message
    .replace(/[^\w\s:]/gi, '')
    .replace('Error: VM Exception while processing transaction: reverted with reason string y ', '');
};

function hex_to_ascii(str1) {
  var hex = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

export const makeTx = async (address: string, api: AxiosInstance, wallet: Wallet, method: string, params) => {
  const arcana: ArcanaT = Arcana(address, wallet);
  const forwarderContract: ForwarderT = Forwarder(localStorage.getItem('forwarder'), wallet);
  let req = await sign(wallet, arcana, forwarderContract, method, params);
  let res = await api.post('meta-tx/', req);
  if (res.data.err) {
    throw customError('TRANSACTION', cleanMessage(res.data.err));
  }
  //Decoupled checking txns
  await checkTxnStatus(wallet, res.data.txHash);

  return res.data;
};

export const checkTxnStatus = async (provider, txHash: string) => {
  await new Promise((r) => setTimeout(r, 1000));
  let tx = await provider.getTransaction(txHash);
  try {
    await tx.wait();
  } catch (e) {
    let code = await provider.call(tx, tx.blockNumber);
    let reason = hex_to_ascii(code.substr(138));

    if (reason) {
      throw customError('TRANSACTION', cleanMessage(reason));
    } else {
      throw customError('', e.error);
    }
  }
};

export const AESEncrypt = async (key: CryptoKey, rawData: string) => {
  const iv = new Uint8Array(16);
  const enc = new TextEncoder();
  const encrypted_content = await window.crypto.subtle.encrypt(
    {
      name: 'AES-CTR',
      counter: iv,
      length: 128,
    },
    key,
    enc.encode(rawData),
  );
  return toHexString(encrypted_content);
};

export const AESDecrypt = async (key: CryptoKey, rawData: string) => {
  const iv = new Uint8Array(16);
  const encrypted_content = await window.crypto.subtle.decrypt(
    {
      name: 'AES-CTR',
      counter: iv,
      length: 128,
    },
    key,
    fromHexString(rawData),
  );
  const dec = new TextDecoder();
  const str = dec.decode(new Uint8Array(encrypted_content));
  return str;
};

export const encryptKey = async (publicKey: string, key: string): Promise<any> => {
  return 'key';
};

export const decryptKey = async (privateKey: string, encryptedKey: string): Promise<string> => {
  return 'key';
};

export const isFileUploaded = async (address: string, fileId: string, provider: any): Promise<boolean> => {
  const arcana = Arcana(address, provider);
  const file = await arcana.files(fileId);
  return file.uploaded;
};

export const parseHex = (hex) => {
  return hex.substring(0, 2) !== '0x' ? '0x' + hex : hex;
};

export const customError = (code: string, message: string): Error => {
  const error: any = new Error(cleanMessage(message));
  error.code = code;
  return error;
};

export const getDKGNodes = async (provider): Promise<any[]> => {
  // Fetch DKG Node Details from dkg contract
  const dkg = DKG(localStorage.getItem('dkg'), provider);
  const nodes = await dkg.getCurrentEpochDetails();
  return nodes;
};

export const getFile = async (did: string, provider: Web3Provider): Promise<any> => {
  let contract = new Contract(localStorage.getItem('did'), DID.abi, provider);
  let file = await contract.getFile(parseHex(did));
  return file
}

export const getAppAddress = async (did: string, provider: Web3Provider): Promise<string> => {
  let contract = new Contract(localStorage.getItem('did'), DID.abi, provider);
  let appAddress = (await contract.getFile(parseHex(did))).app;
  return appAddress
}