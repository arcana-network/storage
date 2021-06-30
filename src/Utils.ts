import './SHA256';
import Sha256 from './SHA256';
import { Contract, providers, Wallet, utils } from 'ethers';
import * as config from './config.json';
import * as arcana from './contracts/Arcana.json';
import { encryptWithPublicKey, decryptWithPrivateKey } from 'eth-crypto';

export class KeyGen {
  hasher: any;
  file: File;
  chunkSize: number;

  constructor(file: File, chunkSize = 10 * 2 ** 20) {
    this.file = file;
    this.hasher = new Sha256();
    this.chunkSize = chunkSize;
  }

  async read<T>(position: number, length: number, binary?: boolean): Promise<{ data: T; length: number }> {
    return new Promise((resolve, reject) => {
      this._chunk_reader(position, length, binary, (evt: any) => {
        if (evt.target.error == null) {
          resolve({ data: evt.target.result, length: evt.total });
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
    return this.hasher
      .digest()
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('');
  };
}

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

export const sigToString = (encrypted: encryptedI): string =>
  '0x' +
  encrypted.mac +
  encrypted.iv +
  encrypted.ephemPublicKey.substr(encrypted.ephemPublicKey.length - 128, 128) +
  encrypted.ciphertext;

export const stringToObj = (str: string): encryptedI => {
  return {
    ciphertext: str.substr(226),
    ephemPublicKey: '04' + str.substr(98, 128),
    iv: str.substr(66, 32),
    mac: str.substr(2, 64),
  };
};

export const Arcana = (privateKey?: string): Contract => {
  const provider = new providers.JsonRpcProvider(config.rpc);
  let wallet;
  if (privateKey) {
    wallet = new Wallet(privateKey, provider);
  }
  return new Contract(config.address, arcana.abi, wallet ? wallet : provider);
};

export const makeTx = async (privateKey: string, method: string, params) => {
  const arcana = Arcana(privateKey);
  const tx = await arcana[method](...params);
  await tx.wait();
  return tx.hash;
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
  return toHexString(signature);
};

export const encryptKey = async (publicKey: string, key: string): Promise<string> => {
  const encrypted = await encryptWithPublicKey(publicKey, key);
  return sigToString(encrypted);
};

export const decryptKey = async (privateKey: string, encryptedKey: string): Promise<string> => {
  return await decryptWithPrivateKey(privateKey, stringToObj(encryptedKey));
};

export const getEncryptedKey = async (fileId: string): Promise<string> => {
  const arcana = Arcana();
  const file = await arcana.files(fileId);
  return file.encryptedKey;
};

export const getWallet = async (privateKey: string) => {
  return new Wallet(privateKey);
};

export const getRandomWallet = () => {
  return Wallet.createRandom();
}

export class Api {
  baseUrl: string = config.developerServer;
  accessToken: string;
  email: string;
  wallet: any;
  appId: number;

  constructor(wallet: Wallet, email: string, appId: number) {
    this.wallet = wallet;
    this.email = email;
    this.appId = appId;
  }

  post = async (url: string, body: any) => {
    return await fetch(this.baseUrl + url, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  get = async (url:string) => {
    return await fetch(this.baseUrl + url, {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    });
  }

  register = async () => {
    const signature = await this.wallet.signMessage(`${this.email}, ${this.wallet.address}, register, ${this.appId}`);
    let res = await this.post('auth/signup', {
      email: this.email,
      address: this.wallet.address,
      signature,
    });
    return res.status;
  };

  login = async() => {
    const nonce = (await (await this.get(`auth/nonce/${this.email}`)).json()).nonce
    console.log("nonce",nonce)
    const signature = await this.wallet.signMessage(`${this.email}, ${this.wallet.address}, login, ${nonce}`);
    let res = await this.post('auth/signin', {
      email: this.email,
      address: this.wallet.address,
      signature,
    });
    this.accessToken = (await res.json()).accessToken
    return this.accessToken 
  }
}
