export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldEpoch',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newEpoch',
          type: 'uint256'
        }
      ],
      name: 'EpochChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'publicKey',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'position',
          type: 'uint256'
        }
      ],
      name: 'NodeListed',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [],
      name: 'clearAllEpoch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'currentEpoch',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'epochInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'n',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'k',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 't',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'prevEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'nextEpoch',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getCurrentEpochDetails',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'declaredIp',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'position',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pubKx',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'pubKy',
              type: 'uint256'
            },
            {
              internalType: 'string',
              name: 'tmP2PListenAddress',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'p2pListenAddress',
              type: 'string'
            }
          ],
          internalType: 'struct NodeList.Details[]',
          name: 'nodes',
          type: 'tuple[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        }
      ],
      name: 'getEpochInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'n',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'k',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 't',
          type: 'uint256'
        },
        {
          internalType: 'address[]',
          name: 'nodeList',
          type: 'address[]'
        },
        {
          internalType: 'uint256',
          name: 'prevEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'nextEpoch',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address'
        }
      ],
      name: 'getNodeDetails',
      outputs: [
        {
          internalType: 'string',
          name: 'declaredIp',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'position',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'tmP2PListenAddress',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'p2pListenAddress',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        }
      ],
      name: 'getNodes',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'oldEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'newEpoch',
          type: 'uint256'
        }
      ],
      name: 'getPssStatus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_epoch',
          type: 'uint256'
        }
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address'
        }
      ],
      name: 'isWhitelisted',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'declaredIp',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'pubKx',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'pubKy',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'tmP2PListenAddress',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'p2pListenAddress',
          type: 'string'
        }
      ],
      name: 'listNode',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'nodeDetails',
      outputs: [
        {
          internalType: 'string',
          name: 'declaredIp',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'position',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'pubKx',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'pubKy',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'tmP2PListenAddress',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'p2pListenAddress',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address'
        }
      ],
      name: 'nodeRegistered',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'pssStatus',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_newEpoch',
          type: 'uint256'
        }
      ],
      name: 'setCurrentEpoch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'n',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'k',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 't',
          type: 'uint256'
        },
        {
          internalType: 'address[]',
          name: 'nodeList',
          type: 'address[]'
        },
        {
          internalType: 'uint256',
          name: 'prevEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'nextEpoch',
          type: 'uint256'
        }
      ],
      name: 'updateEpoch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'oldEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'newEpoch',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'status',
          type: 'uint256'
        }
      ],
      name: 'updatePssStatus',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'epoch',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: 'allowed',
          type: 'bool'
        }
      ],
      name: 'updateWhitelist',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'whitelist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
}
