import { AxiosInstance } from 'axios';
import { BigNumber, ethers } from 'ethers';
import { readHash } from './constant';
import { makeTx, parseHex, Arcana, customError, ensureArray, getAppAddress } from './Utils';
import { wrapInstance } from "./sentry";

export enum AccessTypeEnum {
  MY_FILES,
  SHARED_FILES
}

export class FileAPI {
  private provider: any;
  private api: AxiosInstance;
  private appAddress: string;
  private appId: number;

  constructor(appAddress: string,appId:number, provider: any, api: AxiosInstance, debug: boolean) {
    this.provider = provider;
    this.api = api;
    this.appAddress = appAddress;
    this.appId = appId;

    if (debug) {
      wrapInstance(this)
    }
  }

  setAppAddress = async (did: string) => {
    // if app address is not set then fetch it from the did and set it
    if (!this.appAddress) {
      this.appAddress = await getAppAddress(parseHex(did), this.provider);
    }
  }

  numOfMyFiles = async () => {
    return (await this.api('files/total/')).data;
  }

  numOfMyFilesPages = async (pageSize: number = 20) => {
    const numOfPages = (await this.numOfMyFiles()) / pageSize;
    return Math.ceil(numOfPages);
  }

  myFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if(pageNumber > await this.numOfMyFilesPages(pageSize)){
      throw new Error("invalid_page_number");
    }

    const res = await this.api.get('list-files/',{
      params : {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize,
        appid: this.appId
      }
    })
    let data = [];
    if (res.data) data = res.data;
    return data;
  };

  numOfSharedFiles = async () => {
    return (await this.api('files/shared/total/')).data;
  }

  numOfSharedFilesPages = async (pageSize: number = 20) => {
    return Math.ceil((await this.numOfSharedFiles()) / pageSize);
  }

  sharedFiles = async (pageNumber: number = 1, pageSize: number = 20) => {
    if(pageNumber > await this.numOfSharedFilesPages(pageSize)){
      throw new Error("invalid_page_number");
    }
    const res = await this.api('shared-files/', {
      params: {
        offset: (pageNumber - 1) * pageSize,
        count: pageSize
      }
    })
    let data = [];
    if (res.data) data = res.data;
    return data;
  };

  list = (type: AccessTypeEnum, pageNumber: number = 1, pageSize: number = 20) =>  {
    if (typeof type !== 'number') {
      throw customError('TRANSACTION', 'Invalid argument passed to list. Type must be a number.')
    }

    switch (type) {
      case AccessTypeEnum.MY_FILES:
        return this.myFiles(pageNumber, pageSize)
      case AccessTypeEnum.SHARED_FILES:
        return this.sharedFiles(pageNumber, pageSize)
      default:
        throw customError('TRANSACTION', 'Invalid argument passed to list. Type must be in AccessTypeEnum.')
    }
  }

  share = async (did: string[] | string, _address: string[] | string, validity: number[] | number | null): Promise<string> => {
    did = ensureArray(did).map(parseHex)
    await this.setAppAddress(did[0]);
    const address = ensureArray(_address).map(parseHex)
    const accessType = [];
    did.forEach(() => {
      address.forEach(() => {
        accessType.push(readHash);
      })
    })

    let actualValidity
    if (Array.isArray(validity)) {
      if (!validity.every(x => BigNumber.isBigNumber(x) || Number.isFinite(x))) {
        throw customError('TRANSACTION', 'Invalid argument passed to validity. Values must be a Number or a BigNumber')
      }
      actualValidity = validity;
    } else if (Number.isFinite(validity)) {
      actualValidity = [validity]
    } else if (validity == null) {
      // subtracting current time from max time with 1000 seconds as buffer, becuase in smart contract we are adding validity with current timestamp
      actualValidity = [
        ethers.constants.MaxUint256.sub(
          BigNumber.from(
            Math.floor(new Date().getTime()/1000)+1000)
            )
          ]
    } else {
      throw customError('TRANSACTION', 'Validity must be undefined or an array.')
    }
    return await makeTx(this.appAddress, this.api, this.provider, 'share', [
      did,
      address,
      accessType,
      actualValidity,
    ]);
  };

  revoke = async (did: string, address: string): Promise<string> => {
    did = parseHex(did);
    await this.setAppAddress(did);
    address = parseHex(address)
    return await makeTx(this.appAddress, this.api, this.provider, 'revoke', [did, address, readHash]);
  };

  changeOwner = async (did: string, newOwnerAddress: string): Promise<string> => {
    did = parseHex(did);
    await this.setAppAddress(did);
    newOwnerAddress = parseHex(newOwnerAddress)
    return await makeTx(this.appAddress, this.api, this.provider, 'changeFileOwner', [did, newOwnerAddress]);
  };

  changeFileOwner = (did, newOwnerAddress: string): Promise<string> => {
    return this.changeOwner(did, newOwnerAddress)
  }

  delete = async (did: string): Promise<string> => {
    await this.setAppAddress(did);
    did = parseHex(did);
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteFile', [did]);
  };

  deleteFile = (did: string): Promise<string> => {
    return this.delete(did)
  }

  deleteAccount = async () => {
    return await makeTx(this.appAddress, this.api, this.provider, 'deleteAccount', []);
  };

  getAccountStatus = async () => {
    const arcana = Arcana(this.appAddress, this.provider);
    return arcana.status(await this.provider.getAddress());
  };

  getUploadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider);
    let con = await arcana.getUploadLimit({from: (await this.provider.listAccounts())[0]});
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getDownloadLimit = async (): Promise<[number, number]> => {
    const arcana = Arcana(this.appAddress, this.provider);
    let con = await arcana.getDownloadLimit({from: (await this.provider.listAccounts())[0]});
    return [con[0].toNumber(), con[1].toNumber()];
  };

  getSharedUsers = async (did: string): Promise<string[]> => {
    const realDID = parseHex(did)
    await this.setAppAddress(realDID);
    const arcana = Arcana(this.appAddress, this.provider);
    const users = await arcana.getAllUsers(realDID, readHash);
    return users.filter((d) => d !== ethers.constants.AddressZero);
  };
}