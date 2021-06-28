import { utils } from 'ethers';
import { readHash } from './constant';
import { makeTx, encryptKey } from './Utils';

export class Access {
  private privateKey: string;
  constructor(privateKey: string) {
    this.privateKey = privateKey;
  }

  share = async (fileId: string[], publicKey: string[], validity: number[]): Promise<string> => {
    let address = [];
    let encryptedKey = [];
    let accessType = [];
    publicKey.forEach((p) => {
      address.push(utils.computeAddress(p));
      encryptedKey.push(utils.toUtf8Bytes('asdf'));
      accessType.push(readHash);
    });
    return await makeTx(this.privateKey, 'share', [fileId, address, accessType, encryptedKey, validity]);
  };
}
