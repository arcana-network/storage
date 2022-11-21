export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address'
        }
      ],
      name: 'AdminChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beacon',
          type: 'address'
        }
      ],
      name: 'BeaconUpgraded',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'uint8',
          name: 'control',
          type: 'uint8'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'app',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'user',
          type: 'address'
        }
      ],
      name: 'FilePermission',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'did',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'chain_id',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'token_id',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'nftContract',
          type: 'address'
        }
      ],
      name: 'NFTDownload',
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address'
        }
      ],
      name: 'Upgraded',
      type: 'event'
    },
    {
      inputs: [],
      name: 'APP_ROLE',
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
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: '_owner',
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
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        },
        {
          internalType: 'uint8',
          name: '_control',
          type: 'uint8'
        },
        {
          internalType: 'address',
          name: '_requester',
          type: 'address'
        }
      ],
      name: 'checkPermission',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        },
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        }
      ],
      name: 'completeUpload',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        }
      ],
      name: 'deleteFile',
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
      name: 'downloadNFT',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        }
      ],
      name: 'getFile',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        },
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
          name: '_did',
          type: 'bytes32'
        }
      ],
      name: 'getFileOwner',
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
          name: '_did',
          type: 'bytes32'
        }
      ],
      name: 'getRuleSet',
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
      inputs: [
        {
          internalType: 'address',
          name: '_relayer',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_factory',
          type: 'address'
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
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: '_nftContract',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '_chainId',
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
      inputs: [],
      name: 'proxiableUUID',
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
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '_fileSize',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: '_uploaded',
          type: 'bool'
        },
        {
          internalType: 'bytes32',
          name: '_name',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: '_fileHash',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: '_storageNode',
          type: 'address'
        }
      ],
      name: 'setFile',
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
          name: '_did',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: '_ruleHash',
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
          internalType: 'address',
          name: 'newImplementation',
          type: 'address'
        }
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address'
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes'
        }
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    }
  ]
}
