import './SHA256';
import Sha256 from './SHA256';
import { Contract, providers, Wallet, utils, Bytes } from 'ethers';
import arcana from './contracts/Arcana';
import forwarder from './contracts/Forwarder';
import { encryptWithPublicKey, decryptWithPrivateKey } from 'eth-crypto';
import { sign } from './signer';
import { Arcana as ArcanaT, Forwarder as ForwarderT } from './typechain';
import { AxiosInstance } from 'axios';

export type Config = {
  appId: number;
  privateKey: string;
  email: string;
  gateway: any;
  debug: any;
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
      // console.log(data.length);
      
      this.hasher.update(data.data);
      // console.debug("offset",offset,"chunk size", this.chunkSize);
      
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

interface encryptedI {
  ciphertext: string;
  ephemPublicKey: string;
  iv: string;
  mac: string;
}

export const getProvider = () => {
  return new providers.JsonRpcProvider(localStorage.getItem('rpc_url'));
};

export const Arcana = (address: string, wallet?: Wallet): ArcanaT => {
  const provider = getProvider();
  return new Contract(address, arcana.abi, wallet ? wallet : provider) as ArcanaT;
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
  const provider = new providers.JsonRpcProvider(localStorage.getItem('rpc_url'));
  const forwarderContract: ForwarderT = new Contract(
    localStorage.getItem('forwarder'),
    forwarder.abi,
    provider,
  ) as ForwarderT;
  let req = await sign(wallet, arcana, forwarderContract, method, params);
  let res = await api.post('api/meta-tx/', req);
  if (res.data.err) {
    throw customError('TRANSACTION', cleanMessage(res.data.err.message));
  }
  // await new Promise((r) => setTimeout(r, 1000));
  let tx = await wallet.provider.getTransaction(res.data.txHash);
  try {
    await tx.wait();
  } catch (e) {
    let code = await provider.call(tx, tx.blockNumber);
    let reason = hex_to_ascii(code.substr(138));
    console.log('revert reason', reason);
    if (reason) {
      throw customError('TRANSACTION', cleanMessage(reason));
    } else {
      throw customError('', e.error);
    }
  }
  return res.data;
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

export const createChildKey = async (privateKey: string, index: number) => {
  const enc = new TextEncoder();
  const key = await window.crypto.subtle.importKey(
    'raw', // raw format of the key - should be Uint8Array
    fromHexString(privateKey),
    {
      // algorithm details
      name: 'HMAC',
      hash: { name: 'SHA-256' },
    },
    false, // export = false
    ['sign', 'verify'], // what this key can do
  );
  const signature = await window.crypto.subtle.sign('HMAC', key, enc.encode(String(index)));
  return getWallet(toHexString(signature));
};

export const encryptKey = async (publicKey: string, key: string): Promise<any> => {
  const encrypted = await encryptWithPublicKey(publicKey.substring(publicKey.length - 128), key);
  return JSON.stringify(encrypted);
};

export const decryptKey = async (privateKey: string, encryptedKey: string): Promise<string> => {
  return await decryptWithPrivateKey(privateKey, JSON.parse(encryptedKey));
};

export const getEncryptedKey = async (address: string, fileId: string): Promise<string> => {
  const arcana = Arcana(address);
  const file = await arcana.files(fileId);
  return utils.toUtf8String(file.encryptedKey);
};

export const isFileUploaded = async (address: string, fileId: string): Promise<boolean> => {
  const arcana = Arcana(address);
  const file = await arcana.files(fileId);
  return file.uploaded;
};

export const getWallet = (privateKey: string) => {
  const provider = new providers.JsonRpcProvider(localStorage.getItem('rpc_url'));
  return new Wallet(privateKey, provider);
};

export const getRandomWallet = () => {
  const provider = new providers.JsonRpcProvider(localStorage.getItem('rpc_url'));
  return Wallet.createRandom().connect(provider);
};

export const parseHex = (hex) => {
  return hex.substring(0, 2) != '0x' ? '0x' + hex : hex;
};

export const customError = (code: string, message: string): Error => {
  const error: any = new Error(cleanMessage(message));
  error.code = code;
  return error;
};
