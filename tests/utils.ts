import { BigNumber, ethers } from 'ethers';
import arcana from '../src/contracts/Arcana';
import { Blob as nBlob } from 'blob-polyfill'

export const makeEmail = () => {
  const strValues = 'abcdefg12345'
  let strEmail = ''
  let strTmp
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()))
    strEmail = strEmail + strTmp
  }
  strTmp = ''
  strEmail = strEmail + '@example.com'
  return strEmail
}

export async function mockFile () {
  // file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
  // file = new File([file], "picsum_img", { type: file.type });
  return new nBlob([await (await fetch('https://picsum.photos/id/872/200/300')).arrayBuffer()])
}

export const parseData = (data: any, abi?: any[]) => {
  const iface = new ethers.utils.Interface(abi ?? arcana.abi);
  const pt = iface.parseTransaction(data);
  return { name: pt.functionFragment.name, args: pt.args };
};

export function getCurrentEpochDetails () {
  return ethers.utils.defaultAbiCoder.encode(
    ['tuple(string declaredIp, uint position, uint pubKx, uint pubKy,string tmP2PListenAddress,string p2pListenAddress)[]'],
    [
      [{
        declaredIp: 'dkgnode1.arcana.network:443',
        position: BigNumber.from(1),
        pubKx: BigNumber.from('94092314634701866525626073149303160520729386515524720421418250948113862297915'),
        pubKy: BigNumber.from('82860569164148472584425766858283823712986397711875628047826072850028308052085'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      },
      {
        declaredIp: 'dkgnode2.arcana.network:443',
        position: BigNumber.from(2),
        pubKx: BigNumber.from('18725709297507814338396670725616947897744919417956151611982756426915308718214'),
        pubKy: BigNumber.from('31098726272240182864697137329453702958090379470422664478475200561887973118634'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      },
      {
        declaredIp: 'dkgnode3.arcana.network:443',
        position: BigNumber.from(3),
        pubKx: BigNumber.from('54967255425479000604678757168961396671284587295936023720319451163930575945602'),
        pubKy: BigNumber.from('109179747456648182482590590331900372057877104853594713520460315948311765110485'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      },
      {
        declaredIp: 'dkgnode4.arcana.network:443',
        position: BigNumber.from(4),
        pubKx: BigNumber.from('86651919845824912804644704550702415463849634044370994137774665954532230790754'),
        pubKy: BigNumber.from('60965583571786196808598883357582639800911839062252314335972544389233185738069'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      },
      {
        declaredIp: 'dkgnode5.arcana.network:443',
        position: BigNumber.from(5),
        pubKx: BigNumber.from('58000987645161114488637239014933724984772500294748771512242772345851290723002'),
        pubKy: BigNumber.from('107706466532171763591519283765391387432691257362979535915064258147361312357436'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      },
      {
        declaredIp: 'dkgnode6.arcana.network:443',
        position: BigNumber.from(6),
        pubKx: BigNumber.from('91327612220975626927187148915643396779557621363775683962747747337368022753936'),
        pubKy: BigNumber.from('3353550959710611337887589257189546791361834137873305209260782690369635733214'),
        p2pListenAddress: 'u',
        tmP2PListenAddress: 't'
      }]
    ])
}