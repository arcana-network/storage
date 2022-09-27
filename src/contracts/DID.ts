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
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'Apps',
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
      name: 'NFTHandler',
      outputs: [
        {
          internalType: 'contract IArcanaNFTHandler',
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
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'files',
      outputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'fileSize',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: 'uploaded',
          type: 'bool'
        },
        {
          internalType: 'bytes',
          name: 'encryptedMetaData',
          type: 'bytes'
        },
        {
          internalType: 'address',
          name: 'storageNode',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'app',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'version',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: 'isPublic',
          type: 'bool'
        },
        {
          internalType: 'bool',
          name: 'duplicate',
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
        }
      ],
      name: 'getFile',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'fileSize',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'uploaded',
              type: 'bool'
            },
            {
              internalType: 'bytes',
              name: 'encryptedMetaData',
              type: 'bytes'
            },
            {
              internalType: 'address',
              name: 'storageNode',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'app',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'version',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'isPublic',
              type: 'bool'
            },
            {
              internalType: 'bool',
              name: 'duplicate',
              type: 'bool'
            }
          ],
          internalType: 'struct IDID.File',
          name: '',
          type: 'tuple'
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
      inputs: [],
      name: 'initialize',
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
          internalType: 'bytes',
          name: '_encryptedMetaData',
          type: 'bytes'
        },
        {
          internalType: 'address',
          name: '_storageNode',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: '_public',
          type: 'bool'
        },
        {
          internalType: 'bool',
          name: '_duplicate',
          type: 'bool'
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
          name: '_nftHandler',
          type: 'address'
        }
      ],
      name: 'setNFTHandler',
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
