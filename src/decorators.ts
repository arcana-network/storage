// NOTE: we don't use decorator factories here (@requiresLocking(this.lock)) because that causes TS2532 (Object may be undefined)
// This is a flaw in TypeScript but there's no other way for now that doesn't cause errors, this is not good either since we have to hardcode the lock

import { chainIdToBlockchainExplorerURL, chainIdToRPCURL } from './constant'

export function requiresLocking (target, key, descriptor) {
  const actualFn = descriptor.value

  // tslint:disable-next-line:only-arrow-functions
  descriptor.value = async function (...args) {
    const release = await this.state.lock.acquire()
    let result
    try {
      result = await actualFn.apply(this, args)
    } finally {
      release()
    }
    return result
  }
}

export function requiresArcanaNetwork (target, key, descriptor) {
  const actualFn = descriptor.value
  descriptor.value = async function (...args) {
    const network = await this.state.provider.getNetwork()
    const hexChainID = '0x' + this.state.chainID.toString(16)

    if (this.state.chainID !== network.chainId) {
      try {
        await this.state.provider.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: hexChainID }]
        })
      } catch (e) {
        // This error code indicates that the chain has not been added to the wallet.
        if (e.code === 4902) {
          const blockchainURL = chainIdToBlockchainExplorerURL.get(this.state.chainID)
          await this.state.provider.provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: hexChainID,
                chainName: 'Arcana',

                rpcUrls: [chainIdToRPCURL.get(this.state.chainID)],
                blockExplorerUrls: blockchainURL ? [blockchainURL] : [],

                nativeCurrency: {
                  symbol: 'XAR',
                  // ?
                  decimals: 18
                }
              }
            ]
          })
          await this.state.provider.provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: hexChainID }]
          })
        } else {
          throw e
        }
      }
    }

    return actualFn.apply(this, args)
  }
}

export function requiresAllDecorators (target, key, descriptor) {
  requiresArcanaNetwork(target, key, descriptor)
  requiresLocking(target, key, descriptor)
}
