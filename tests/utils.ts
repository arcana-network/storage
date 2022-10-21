import { ethers } from 'ethers';
import arcana from '../src/contracts/Arcana';
export const parseData = (data: any, abi?:any[]) => {
  let iface = new ethers.utils.Interface(abi ?? arcana.abi);
  const pt = iface.parseTransaction(data);
  return { name: pt.functionFragment.name, args: pt.args };
};
