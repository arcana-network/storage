import { utils } from 'ethers';
import { readHash } from './constant';
import { makeTx, getEncryptedKey, decryptKey, encryptKey } from './Utils';

export class Access {
  private privateKey: string;
  constructor(privateKey: string) {
    this.privateKey = privateKey;
  }

  share = async (fileId: string[], publicKey: string[], validity: number[]): Promise<string> => {
    let address = [];
    let encryptedKey = [];
    let accessType = [];
    await Promise.all(
      fileId.map(async (f) => {
        const EK = await getEncryptedKey(f);
        const key = await decryptKey(this.privateKey, EK);
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
    return await makeTx(this.privateKey, 'share', [fileId, address, accessType, encryptedKey, validity]);
  };
}
