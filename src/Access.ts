import { AxiosInstance } from 'axios';
import { ethers, utils } from 'ethers';
import { readHash } from './constant';
import { makeTx, getEncryptedKey, decryptKey, encryptKey, parseHex, Arcana } from './Utils';

export class Access {
  private provider: any;
  private api: AxiosInstance;
  private appAddress: string;

  constructor(appAddress: string, provider: any, api: AxiosInstance) {
    this.provider = provider;
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
        const key = await getEncryptedKey(this.appAddress, f, this.provider);
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
    return await makeTx(this.appAddress, this.api, this.provider, 'share', [
      fileId,
      address,
      accessType,
      encryptedKey,
      validity,
    ]);
  };

  revoke = async (fileId: string, address: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.provider, 'revoke', [fileId, address, readHash]);
  };

  changeFileOwner = async (fileId: string, newOwnerAddress: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.provider, 'changeFileOwner', [fileId, newOwnerAddress]);
  };

  deleteFile = async (fileId: string): Promise<string> => {
    fileId = parseHex(fileId);
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteFile', [fileId]);
  };

  deleteAccount = async () => {
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteAccount', []);
  };

  getAccountStatus = async () => {
    const arcana = Arcana(this.appAddress, this.provider);
    return arcana.status(await this.provider.getAddress());
  };

  getUploadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider);
    let con = await arcana.getUploadLimit();
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getDownloadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider);
    let con = await arcana.getDownloadLimit();
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getSharedUsers = async (fileId: string): Promise<string[]> => {
    const arcana = Arcana(this.appAddress, this.provider);
    let users = await arcana.getAllUsers(fileId, readHash);
    return users.filter((d) => d != ethers.constants.AddressZero);
  };
}
