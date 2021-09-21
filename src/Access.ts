import { AxiosInstance } from 'axios';
import { utils } from 'ethers';
import { readHash } from './constant';
import { makeTx, getEncryptedKey, decryptKey, encryptKey } from './Utils';

export class Access {
  private wallet: any;
  private convergence: string;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string,wallet: any, convergence: string, api: AxiosInstance) {
    this.wallet = wallet;
    this.convergence = convergence;
    this.api = api;
    this.appAddress = appAddress;
  }

  share = async (fileId: string[], publicKey: string[], validity: number[]): Promise<string> => {
    let address = [];
    let encryptedKey = [];
    let accessType = [];
    await Promise.all(
      fileId.map(async (f) => {
        const EK = await getEncryptedKey(this.appAddress,f);
        const key = await decryptKey(this.wallet.privateKey, EK);
        await Promise.all(
          publicKey.map(async (p) => {
            const pubKey = p.slice(p.length - 128);
            address.push(utils.computeAddress(p));
            encryptedKey.push(await encryptKey(pubKey, key));
            accessType.push(readHash);
          }),
        );
      }),
    );
    return await makeTx(this.appAddress,this.api, this.wallet, 'share', [fileId, address, accessType, encryptedKey, validity]);
  };

  revoke = async (fileId: string, address: string): Promise<string> => {
    return await makeTx(this.appAddress,this.api, this.wallet, 'revoke', [fileId, address, readHash]);
  };

  changeFileOwner = async (fileId: string, newOwnerAddress: string): Promise<string> => {
    return await makeTx(this.appAddress,this.api, this.wallet, 'changeFileOwner', [fileId, newOwnerAddress]);
  };

  deleteFile = async (fileId: string): Promise<string> => {
    return await makeTx(this.appAddress,this.api, this.wallet, 'deleteFile', [fileId]);
  };
}
