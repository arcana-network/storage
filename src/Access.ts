import { AxiosInstance } from 'axios';
import { ethers, utils } from 'ethers';
import { readHash } from './constant';
import { makeTx, getEncryptedKey, decryptKey, encryptKey, parseHex, Arcana } from './Utils';

export class Access {
  private wallet: any;
  private convergence: string;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string, wallet: any, convergence: string, api: AxiosInstance) {
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
        f = f.substring(0, 2) !== '0x' ? '0x' + f : f;
        const EK = await getEncryptedKey(this.appAddress, f);
        const key = await decryptKey(this.wallet.privateKey, EK);
        await Promise.all(
          publicKey.map(async (p) => {
            const pubKey = p.slice(p.length - 128);
            address.push(utils.computeAddress(p));
            encryptedKey.push(utils.toUtf8Bytes(await encryptKey(pubKey, key)));
            accessType.push(readHash);
          }),
        );
      }),
    );
    return await makeTx(this.appAddress, this.api, this.wallet, 'share', [
      fileId,
      address,
      accessType,
      encryptedKey,
      validity,
    ]);
  };

  revoke = async (fileId: string, address: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.wallet, 'revoke', [fileId, address, readHash]);
  };

  changeFileOwner = async (fileId: string, newOwnerAddress: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.wallet, 'changeFileOwner', [fileId, newOwnerAddress]);
  };

  deleteFile = async (fileId: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.wallet, 'deleteFile', [fileId]);
  };

  getUploadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.wallet);
    let con = await arcana.getUploadLimit();
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getDownloadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.wallet);
    let con = await arcana.getDownloadLimit();
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getSharedUsers = async (fileId: string): Promise<string[]> => {
    const arcana = Arcana(this.appAddress, this.wallet);
    let users = await arcana.getAllUsers(fileId, readHash);
    return users.filter((d) => d != ethers.constants.AddressZero);
  };
}
