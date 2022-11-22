import type { AxiosInstance } from 'axios'
import type { Contract } from 'ethers'
import type { Mutex } from 'async-mutex'
import type { Web3Provider } from '@ethersproject/providers'

export class StateContainer {
  public gatewayURL: string
  public api: AxiosInstance
  public chainID: number
  public provider: Web3Provider

  public appContract: Contract
  public appAddr: string
  public appID: number // ???

  public didContract: Contract
  public didContractAddr: string

  public dkgContract: Contract
  public dkgContractAddr: string

  public forwarderContract: Contract
  public forwarderContractAddr: string

  public lock: Mutex
}
