export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'DeleteApp',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'user',
          type: 'address'
        }
      ],
      name: 'DownloadViaRuleSet',
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
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        }
      ],
      name: 'addFile',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'aggregateLogin',
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
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'appFiles',
      outputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'userVersion',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'appLevelControl',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'changeFileOwner',
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
      name: 'consumption',
      outputs: [
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'defaultLimit',
      outputs: [
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
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
          name: '',
          type: 'address'
        }
      ],
      name: 'delegators',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'deleteApp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'ephemeralWallet',
          type: 'address'
        }
      ],
      name: 'download',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32'
        }
      ],
      name: 'downloadClose',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'appPermission',
          type: 'uint8'
        },
        {
          internalType: 'bool',
          name: 'add',
          type: 'bool'
        }
      ],
      name: 'editAppPermission',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAppConfig',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'grantAppPermission',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'factoryAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'relayer',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: 'aggregateLoginValue',
          type: 'bool'
        },
        {
          internalType: 'address',
          name: 'did',
          type: 'address'
        },
        {
          internalType: 'bytes32',
          name: 'appConfigValue',
          type: 'bytes32'
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
          internalType: 'address',
          name: 'forwarder',
          type: 'address'
        }
      ],
      name: 'isTrustedForwarder',
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
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'limit',
      outputs: [
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'nftContract',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'chainId',
          type: 'uint256'
        }
      ],
      name: 'linkNFT',
      outputs: [],
      stateMutability: 'nonpayable',
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
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        }
      ],
      name: 'removeUserFile',
      outputs: [],
      stateMutability: 'nonpayable',
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
      inputs: [],
      name: 'revokeApp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'appConfig',
          type: 'bytes32'
        }
      ],
      name: 'setAppConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
          type: 'uint256'
        }
      ],
      name: 'setAppLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
          type: 'uint256'
        }
      ],
      name: 'setDefaultLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'store',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'bandwidth',
          type: 'uint256'
        }
      ],
      name: 'setUserLevelLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'toggleWalletType',
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
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'txCounter',
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
          internalType: 'address',
          name: 'delegator',
          type: 'address'
        },
        {
          internalType: 'uint8',
          name: 'control',
          type: 'uint8'
        },
        {
          internalType: 'bool',
          name: 'add',
          type: 'bool'
        }
      ],
      name: 'updateDelegator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'ruleHash',
          type: 'bytes32'
        }
      ],
      name: 'updateRuleSet',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        }
      ],
      name: 'uploadClose',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: 'fileSize',
          type: 'uint256'
        },
        {
          internalType: 'bytes32',
          name: 'name',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'fileHash',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'storageNode',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'ephemeralAddress',
          type: 'address'
        }
      ],
      name: 'uploadInit',
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
      name: 'userAppPermission',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
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
      name: 'userVersion',
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
      name: 'walletType',
      outputs: [
        {
          internalType: 'enum Arcana.WalletMode',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
}
