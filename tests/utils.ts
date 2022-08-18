import { ethers } from 'ethers';
import arcana from '../src/contracts/Arcana';
export const parseData = (data: any) => {
    let iface = new ethers.utils.Interface(arcana.abi);
    const pt = iface.parseTransaction(data);
    return {name: pt.functionFragment.name, args: pt.args}
}