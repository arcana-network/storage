export default {
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        }
      ],
      "name": "DeleteFileEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fileSize",
          "type": "uint256"
        }
      ],
      "name": "NewFileUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "validity",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        }
      ],
      "name": "NewPermissionCheck",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "validity",
          "type": "uint256"
        }
      ],
      "name": "NewShare",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        }
      ],
      "name": "NewUpdateAccess",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DID",
      "outputs": [
        {
          "internalType": "contract IDID",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "NFTHandler",
      "outputs": [
        {
          "internalType": "contract IArcanaNFTHandler",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "accessSpecifier",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "aggregateLogin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeFileOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_ephemeral_address",
          "type": "address"
        }
      ],
      "name": "checkPermission",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "consumption",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        }
      ],
      "name": "deleteFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAppConfig",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_relayer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_aggregateLogin",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "_handlerContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_did",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_appConfigValue",
          "type": "bytes32"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "limit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_nftContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_chainId",
          "type": "uint256"
        }
      ],
      "name": "linkNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "appConfig",
          "type": "bytes32"
        }
      ],
      "name": "setAppConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setAppLevelLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setDefaultLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setUiMode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setUserLevelLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_files",
          "type": "bytes32[]"
        },
        {
          "internalType": "address[]",
          "name": "_user",
          "type": "address[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "_accessType",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_validity",
          "type": "uint256[]"
        }
      ],
      "name": "share",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        }
      ],
      "name": "uploadClose",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_did",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_fileSize",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_encryptedMetaData",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_storageNode",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_ephemeral_address",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_public",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_duplicate",
          "type": "bool"
        }
      ],
      "name": "uploadInit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "walletType",
      "outputs": [
        {
          "internalType": "enum Arcana.WalletMode",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
}
