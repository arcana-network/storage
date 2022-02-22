export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "Arcana",
  "sourceName": "contracts/Arcana.sol",
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
          "name": "n",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "k",
          "type": "uint256"
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
      "name": "NewUpdateACK",
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
          "internalType": "bytes",
          "name": "encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "validity",
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
      "inputs": [],
      "name": "appId",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "appName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeFileOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "enum Arcana.Status",
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "changeUserStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "checkPermission",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "clientID",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "convergence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "inputs": [],
      "name": "deleteAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
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
      "name": "factory",
      "outputs": [
        {
          "internalType": "contract FactoryInterface",
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
        }
      ],
      "name": "files",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "k",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fileSize",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "uploaded",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "encryptedMetaData",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "storageNode",
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
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "getAllUsers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDownloadLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "getFile",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "n",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "k",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fileSize",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "uploaded",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "encryptedMetaData",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "encryptedKey",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "storageNode",
              "type": "address"
            }
          ],
          "internalType": "struct Arcana.File",
          "name": "",
          "type": "tuple"
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
      "inputs": [],
      "name": "getUploadLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_appName",
          "type": "string"
        },
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
          "internalType": "uint128",
          "name": "_appId",
          "type": "uint128"
        },
        {
          "internalType": "enum Arcana.WalletMode",
          "name": "_wallet_type",
          "type": "uint8"
        },
        {
          "internalType": "string[]",
          "name": "_client",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_clientId",
          "type": "string[]"
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
      "name": "reactivateAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_file",
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
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "setAppName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_client",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_clientId",
          "type": "string"
        }
      ],
      "name": "setClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_client",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_clientId",
          "type": "string[]"
        }
      ],
      "name": "setClientIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_convergence",
          "type": "string"
        }
      ],
      "name": "setConvergence",
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
          "internalType": "bytes[]",
          "name": "_encryptedKey",
          "type": "bytes[]"
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
          "internalType": "bytes[]",
          "name": "_encryptedKey",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_validity",
          "type": "uint256[]"
        }
      ],
      "name": "shareUser",
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
      "name": "status",
      "outputs": [
        {
          "internalType": "enum Arcana.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
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
          "name": "_file",
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
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_k",
          "type": "uint256"
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
          "internalType": "bytes",
          "name": "_encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_storageNode",
          "type": "address"
        }
      ],
      "name": "uploadInit",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userAccess",
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
  "bytecode": "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c6158426200004c60003960008181611139015281816111be01528181611e750152611efa01526158426000f3fe6080604052600436106102e65760003560e01c806380afdea811610184578063c45a0155116100d6578063dd245cac1161008a578063e979a2ce11610064578063e979a2ce146108be578063f2fde38b146108de578063f84ed61d146108fe576102e6565b8063dd245cac14610854578063dde8d0d914610874578063e26b013b146108a1576102e6565b8063c5b26447116100bb578063c5b26447146107ea578063c7c02ef51461080a578063d87972621461081f576102e6565b8063c45a0155146107ae578063c53be4c8146107cf576102e6565b806398c9adff11610138578063aaf10f4211610112578063aaf10f4214610759578063b9ff5f1d1461076e578063c12ed14f1461078e576102e6565b806398c9adff146106e5578063a056e1fd14610719578063a10fc67214610739576102e6565b80638da5cb5b116101695780638da5cb5b1461068357806396bab612146106b0578063978d7783146106c5576102e6565b806380afdea8146106135780638a8b093314610663576102e6565b80635b648b0a1161023d57806363a15202116101f15780636ab799f1116101cb5780636ab799f1146105be5780636b2877d4146105de578063715018a6146105fe576102e6565b806363a1520214610540578063645b8b1b146105605780636a29afdc1461059e576102e6565b80635f784b8a116102225780635f784b8a1461049b5780636184533f146104c9578063633f7155146104f6576102e6565b80635b648b0a1461045e5780635bbf11b214610486576102e6565b80633a8be7f51161029f5780634f1ef286116102795780634f1ef286146103ed5780634fb95bc614610400578063572b6c051461042e576102e6565b80633a8be7f5146103985780633be32f7d146103b85780633c69d94f146103cd576102e6565b80630d3fbd05116102d05780630d3fbd05146103385780633659cfe614610358578063377dd46e14610378576102e6565b8062c5fd24146102eb5780630c97282c1461030d575b600080fd5b3480156102f757600080fd5b5061030b610306366004614ffd565b61091e565b005b34801561031957600080fd5b506103226109cd565b60405161032f91906155e8565b60405180910390f35b34801561034457600080fd5b5061030b610353366004615068565b610a5b565b34801561036457600080fd5b5061030b610373366004614f97565b61112e565b34801561038457600080fd5b5061030b61039336600461521e565b6112aa565b3480156103a457600080fd5b5061030b6103b3366004615068565b611327565b3480156103c457600080fd5b5061030b611a8d565b3480156103d957600080fd5b5061030b6103e8366004615369565b611c58565b61030b6103fb366004614fb1565b611e6a565b34801561040c57600080fd5b5061042061041b36600461521e565b611fd7565b60405190815260200161032f565b34801561043a57600080fd5b5061044e610449366004614f97565b6126bf565b604051901515815260200161032f565b34801561046a57600080fd5b50610104546104799060ff1681565b60405161032f91906155d4565b34801561049257600080fd5b5061030b6126d6565b3480156104a757600080fd5b506104bb6104b636600461523f565b612789565b60405161032f929190615598565b3480156104d557600080fd5b506104e96104e436600461521e565b61283e565b60405161032f919061554b565b34801561050257600080fd5b5061052b610511366004614f97565b610103602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561054c57600080fd5b5061030b61055b3660046151a7565b61298b565b34801561056c57600080fd5b5061059161057b366004614f97565b6101056020526000908152604090205460ff1681565b60405161032f91906155ba565b3480156105aa57600080fd5b5061030b6105b9366004615036565b612b30565b3480156105ca57600080fd5b5061030b6105d93660046151a7565b612bc8565b3480156105ea57600080fd5b5061030b6105f93660046151ea565b612ece565b34801561060a57600080fd5b5061030b613234565b34801561061f57600080fd5b50610108546106429061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561066f57600080fd5b5061030b61067e36600461521e565b61329d565b34801561068f57600080fd5b5061069861338b565b6040516001600160a01b03909116815260200161032f565b3480156106bc57600080fd5b5061052b61339b565b3480156106d157600080fd5b5061030b6106e0366004615134565b6133d7565b3480156106f157600080fd5b506107056107003660046151a7565b6134d8565b60405161032f9897969594939291906154e0565b34801561072557600080fd5b5061030b61073436600461529e565b613646565b34801561074557600080fd5b50610322610754366004614f97565b613bc4565b34801561076557600080fd5b50610698613bde565b34801561077a57600080fd5b5061030b610789366004615441565b613c16565b34801561079a57600080fd5b506106986107a9366004615273565b613ca5565b3480156107ba57600080fd5b5061010054610698906001600160a01b031681565b3480156107db57600080fd5b506101085461044e9060ff1681565b3480156107f657600080fd5b5061044e6108053660046151bf565b613cea565b34801561081657600080fd5b5061052b613ffb565b34801561082b57600080fd5b5061052b61083a366004614f97565b610102602052600090815260409020805460019091015482565b34801561086057600080fd5b5061032261086f366004615336565b614028565b34801561088057600080fd5b5061089461088f36600461521e565b61404c565b60405161032f91906155fb565b3480156108ad57600080fd5b50610106546101075461052b919082565b3480156108ca57600080fd5b5061030b6108d9366004615336565b614363565b3480156108ea57600080fd5b5061030b6108f9366004614f97565b6143a4565b34801561090a57600080fd5b5061030b610919366004615336565b614486565b6109266144f6565b6001600160a01b031661093761338b565b6001600160a01b0316146109805760405162461bcd60e51b815260206004820181905260248201526000805160206157ef83398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010560205260409020805482919060ff191660018360028111156109c457634e487b7160e01b600052602160045260246000fd5b02179055505050565b60fb80546109da90615748565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0690615748565b8015610a535780601f10610a2857610100808354040283529160200191610a53565b820191906000526020600020905b815481529060010190602001808311610a3657829003601f168201915b505050505081565b60006101056000610a6a6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610aa657634e487b7160e01b600052602160045260246000fd5b14610ae85760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30610b036144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610b4b57600080fd5b505af1158015610b5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b83919061518b565b610bcf5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b8251845114610c465760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610977565b8051845114610cbd5760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610977565b60005b85518110156111265760005b85518110156111135760ff6000888381518110610cf957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b0316610d256144f6565b6001600160a01b031614610d6c5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610977565b828281518110610d8c57634e487b7160e01b600052603260045260246000fd5b602002602001015160001415610de45760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610977565b6040518060400160405280858481518110610e0f57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001848481518110610e3c57634e487b7160e01b600052603260045260246000fd5b602002602001015142610e4f91906156ed565b81525060fd6000898581518110610e7657634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000878581518110610eae57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000888481518110610ee657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610f2a929190614ce8565b506020820151816001015590505060fe6000888481518110610f5c57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000868481518110610f9457634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020868281518110610fca57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061102757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031687838151811061105857634e487b7160e01b600052603260045260246000fd5b60200260200101516110686144f6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc8798885815181106110b257634e487b7160e01b600052603260045260246000fd5b60200260200101518786815181106110da57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516110f9929190918252602082015260400190565b60405180910390a48061110b81615783565b915050610ccc565b508061111e81615783565b915050610cc0565b505050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156111bc5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610977565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166112177f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146112825760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610977565b61128b816145ab565b604080516000808252602082019092526112a791839190614608565b50565b6112b26144f6565b6001600160a01b03166112c361338b565b6001600160a01b0316146113075760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b604080518082019091528281526020018190526101069190915561010755565b600061010560006113366144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561137257634e487b7160e01b600052602160045260246000fd5b146113b45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c306113cf6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561141757600080fd5b505af115801561142b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144f919061518b565b61149b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b82518451146115125760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610977565b80518451146115895760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610977565b60005b85518110156111265760005b8551811015611a7a5760ff60008883815181106115c557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b03166115f16144f6565b6001600160a01b0316146116385760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610977565b82818151811061165857634e487b7160e01b600052603260045260246000fd5b6020026020010151600014156116b05760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610977565b6116b86144f6565b6001600160a01b03168682815181106116e157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561174b5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610977565b604051806040016040528085838151811061177657634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018483815181106117a357634e487b7160e01b600052603260045260246000fd5b6020026020010151426117b691906156ed565b81525060fd60008985815181106117dd57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600087848151811061181557634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600088848151811061184d57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190611891929190614ce8565b506020820151816001015590505060fe60008884815181106118c357634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008683815181106118fb57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002086828151811061193157634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061198e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03168783815181106119bf57634e487b7160e01b600052603260045260246000fd5b60200260200101516119cf6144f6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879888581518110611a1957634e487b7160e01b600052603260045260246000fd5b6020026020010151878681518110611a4157634e487b7160e01b600052603260045260246000fd5b6020026020010151604051611a60929190918252602082015260400190565b60405180910390a480611a7281615783565b915050611598565b5080611a8581615783565b91505061158c565b60006101056000611a9c6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611ad857634e487b7160e01b600052602160045260246000fd5b14611b1a5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30611b356144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611b7d57600080fd5b505af1158015611b91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb5919061518b565b611c015760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b60026101056000611c106144f6565b6001600160a01b031681526020810191909152604001600020805460ff19166001836002811115611c5157634e487b7160e01b600052602160045260246000fd5b0217905550565b600054610100900460ff1680611c71575060005460ff16155b611cd45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015611cff576000805460ff1961ff0019909116610100171660011790555b61010080546001600160a01b0319166001600160a01b038a16179055611d23614633565b8851611d369060fb9060208c0190614ce8565b50611d40876146fe565b61010880546fffffffffffffffffffffffffffffffff87166101000270ffffffffffffffffffffffffffffffff001989151560ff1993841617161790915561010480548692166001836003811115611da857634e487b7160e01b600052602160045260246000fd5b021790555060005b8351811015611e4c57828181518110611dd957634e487b7160e01b600052603260045260246000fd5b602002602001015160fc858381518110611e0357634e487b7160e01b600052603260045260246000fd5b6020026020010151604051611e1891906154c4565b90815260200160405180910390209080519060200190611e39929190614ce8565b5080611e4481615783565b915050611db0565b508015611e5f576000805461ff00191690555b505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611ef85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610977565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611f537f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611fbe5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610977565b611fc7826145ab565b611fd382826001614608565b5050565b600082815260ff6020818152604080842081516101008101835281546001600160a01b03168152600182015493810193909352600281015491830191909152600381015460608301526004810154909216151560808201526005820180548693859392909160a08401919061204b90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461207790615748565b80156120c45780601f10612099576101008083540402835291602001916120c4565b820191906000526020600020905b8154815290600101906020018083116120a757829003601f168201915b505050505081526020016006820180546120dd90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461210990615748565b80156121565780601f1061212b57610100808354040283529160200191612156565b820191906000526020600020905b81548152906001019060200180831161213957829003601f168201915b5050509183525050600791909101546001600160a01b031660209091015290506121ac61010260006121866144f6565b6001600160a01b03168152602081019190915260400160002060010154610107546147cb565b816060015161010360006121be6144f6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546121ec91906156ed565b111561223a5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610977565b6000805261010260209081527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3215460608301516101039092527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f805490916122a0916156ed565b11156122ee5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610977565b600085815260ff6020819052604090912060040154166123765760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610977565b600085815260fd602090815260408083208784529091528120816123986144f6565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a825260ff9094529190912054919250166123d56144f6565b6001600160a01b031614156123f8576123f142620f42406156ed565b9050612435565b806124355760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610977565b8561243e6144f6565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051612481929190918252602082015260400190565b60405180910390a3600086815260ff6020818152604080842081516101008101835281546001600160a01b031681526001820154938101939093526002810154918301919091526003810154606083015260048101549092161515608082015260058201805491929160a0840191906124f990615748565b80601f016020809104026020016040519081016040528092919081815260200182805461252590615748565b80156125725780601f1061254757610100808354040283529160200191612572565b820191906000526020600020905b81548152906001019060200180831161255557829003601f168201915b5050505050815260200160068201805461258b90615748565b80601f01602080910402602001604051908101604052809291908181526020018280546125b790615748565b80156126045780601f106125d957610100808354040283529160200191612604565b820191906000526020600020905b8154815290600101906020018083116125e757829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152606081015190915061010360006126376144f6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101600082825461266991906156ed565b9091555050606081015160008080526101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f8080549091906126af9084906156ed565b9091555091979650505050505050565b6065546001600160a01b038281169116145b919050565b600261010560006126e56144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561272157634e487b7160e01b600052602160045260246000fd5b1461277a5760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b6064820152608401610977565b60006101056000611c106144f6565b60fd6020908152600093845260408085208252928452828420905282529020805481906127b590615748565b80601f01602080910402602001604051908101604052809291908181526020018280546127e190615748565b801561282e5780601f106128035761010080835404028352916020019161282e565b820191906000526020600020905b81548152906001019060200180831161281157829003601f168201915b5050505050908060010154905082565b600082815260fe6020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156128a557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612887575b50505050509050600080600090505b825181101561298157600086815260fe6020908152604080832088845290915290208054829081106128f657634e487b7160e01b600052603260045260246000fd5b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b0390921680855291909252912060010154909250421061296f5782818151811061295957634e487b7160e01b600052603260045260246000fd5b6020026020010160006001600160a01b03168152505b8061297981615783565b9150506128b4565b5090949350505050565b600081815260ff60205260409020600701546001600160a01b03163314612a1a5760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610977565b600081815260ff60208190526040909120600401541615612a7d5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610977565b600081815260ff60209081526040808320600381015490546001600160a01b031684526101039092528220805491929091612ab99084906156ed565b9091555050600081815260ff602090815260408220600301548280526101039091527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f805491929091612b0d9084906156ed565b9091555050600090815260ff60205260409020600401805460ff19166001179055565b612b386144f6565b6001600160a01b0316612b4961338b565b6001600160a01b031614612b8d5760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b60408051808201825292835260208084019283526001600160a01b039094166000908152610102909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b0316612bea6144f6565b6001600160a01b031614612c575760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b60006101056000612c666144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612ca257634e487b7160e01b600052602160045260246000fd5b14612ce45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30612cff6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612d4757600080fd5b505af1158015612d5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d7f919061518b565b612dcb5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b600082815260ff60205260408120600301549061010390612dea6144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254612e1c9190615705565b9091555050600082815260ff6020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612e6c6005830182614d6c565b612e7a600683016000614d6c565b5060070180546001600160a01b031916905581612e956144f6565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b60006101056000612edd6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612f1957634e487b7160e01b600052602160045260246000fd5b14612f5b5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30612f766144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612fbe57600080fd5b505af1158015612fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ff6919061518b565b6130425760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b600083815260ff602052604090205483906001600160a01b03166130646144f6565b6001600160a01b0316146130d15760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b600084815260fd6020908152604080832085845282528083206001600160a01b03871684529091528120906131068282614d6c565b50600060019190910181905584815260fe60209081526040808320858452825280832080548251818502810185019093528083526131829383018282801561317757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613159575b5050505050856147e3565b600086815260fe602090815260408083208784529091529020805491925090829081106131bf57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690556001600160a01b038416856131eb6144f6565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb8660405161322591815260200190565b60405180910390a45050505050565b61323c6144f6565b6001600160a01b031661324d61338b565b6001600160a01b0316146132915760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b61329b6000614839565b565b6132b2610100546001600160a01b0316331490565b6133245760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610977565b60408051808201909152918252602080830191825260008052610102905290517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32055517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32155565b6033546001600160a01b03165b90565b336000908152610103602090815260408083206001908101546101029093529083200154610107548392916133cf916147cb565b915091509091565b6133df6144f6565b6001600160a01b03166133f061338b565b6001600160a01b0316146134345760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b60005b82518110156134d35781818151811061346057634e487b7160e01b600052603260045260246000fd5b602002602001015160fc84838151811061348a57634e487b7160e01b600052603260045260246000fd5b602002602001015160405161349f91906154c4565b908152602001604051809103902090805190602001906134c0929190614ce8565b50806134cb81615783565b915050613437565b505050565b60ff602081905260009182526040909120805460018201546002830154600384015460048501546005860180546001600160a01b039096169794969395929491909116929161352690615748565b80601f016020809104026020016040519081016040528092919081815260200182805461355290615748565b801561359f5780601f106135745761010080835404028352916020019161359f565b820191906000526020600020905b81548152906001019060200180831161358257829003601f168201915b5050505050908060060180546135b490615748565b80601f01602080910402602001604051908101604052809291908181526020018280546135e090615748565b801561362d5780601f106136025761010080835404028352916020019161362d565b820191906000526020600020905b81548152906001019060200180831161361057829003601f168201915b505050600790930154919250506001600160a01b031688565b600061010560006136556144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561369157634e487b7160e01b600052602160045260246000fd5b146136d35760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c306136ee6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561373657600080fd5b505af115801561374a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061376e919061518b565b6137ba5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b836137ee61010260006137cb6144f6565b6001600160a01b03168152602081019190915260400160002054610106546147cb565b8161010360006137fc6144f6565b6001600160a01b0316815260208101919091526040016000205461382091906156ed565b111561386e5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610977565b600080527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb320546101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f546138c79083906156ed565b11156139155760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610977565b600088815260ff60205260409020546001600160a01b0316156139845760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610977565b8587116139b95760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610977565b60018611613a095760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610977565b84613a565760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f74206265203000000000000000000000000000000000006044820152606401610977565b604051806101000160405280613a6a6144f6565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f825260ff855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff19169115159190911790559183015180519192613b1f92600585019290910190614ce8565b5060c08201518051613b3b916006840191602090910190614ce8565b5060e09190910151600790910180546001600160a01b0319166001600160a01b03928316179055600089815260ff60209081526040918290205482518b81529182018a90529181018890528a9291909116907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b61010160205260009081526040902080546109da90615748565b6000613c117f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b613c1e6144f6565b6001600160a01b0316613c2f61338b565b6001600160a01b031614613c735760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b8060fc83604051613c8491906154c4565b908152602001604051809103902090805190602001906134d3929190614ce8565b60fe6020528260005260406000206020528160005260406000208181548110613ccd57600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613d0c6144f6565b6001600160a01b031614613d795760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b60006101056000613d886144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115613dc457634e487b7160e01b600052602160045260246000fd5b14613e065760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30613e216144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015613e6957600080fd5b505af1158015613e7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea1919061518b565b613eed5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b6001600160a01b038316613f435760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610977565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b038616178155600301549061010390613f7b6144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254613fad9190615705565b9091555050600084815260ff60209081526040808320600301546001600160a01b03871684526101039092528220805491929091613fec9084906156ed565b90915550600195945050505050565b3360009081526101036020908152604080832054610102909252822054610106548392916133cf916147cb565b805160208183018101805160fc82529282019190930120915280546109da90615748565b6140a860405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b600083815260fd60209081526040808320858452825280832033845290915280822081518083019092528054829082906140e190615748565b80601f016020809104026020016040519081016040528092919081815260200182805461410d90615748565b801561415a5780601f1061412f5761010080835404028352916020019161415a565b820191906000526020600020905b81548152906001019060200180831161413d57829003601f168201915b5050509183525050600191820154602091820152600087815260ff808352604080832081516101008101835281546001600160a01b0316815295810154948601949094526002840154908501526003830154606085015260048301541615156080840152600582018054949550909360a0840191906141d890615748565b80601f016020809104026020016040519081016040528092919081815260200182805461420490615748565b80156142515780601f1061422657610100808354040283529160200191614251565b820191906000526020600020905b81548152906001019060200180831161423457829003601f168201915b5050505050815260200160068201805461426a90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461429690615748565b80156142e35780601f106142b8576101008083540402835291602001916142e3565b820191906000526020600020905b8154815290600101906020018083116142c657829003601f168201915b5050509183525050600791909101546001600160a01b03908116602090920191909152815191925016331461435b5760208201516143535760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610977565b815160c08201525b949350505050565b8061010160006143716144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611fd3929190614ce8565b6143ac6144f6565b6001600160a01b03166143bd61338b565b6001600160a01b0316146144015760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b6001600160a01b03811661447d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610977565b6112a781614839565b61448e6144f6565b6001600160a01b031661449f61338b565b6001600160a01b0316146144e35760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b8051611fd39060fb906020840190614ce8565b6000614501336126bf565b15614515575060131936013560601c613398565b61452a610100546001600160a01b0316331490565b61459c5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610977565b6145a461488b565b9050613398565b6145b36144f6565b6001600160a01b03166145c461338b565b6001600160a01b0316146112a75760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b614611836148b0565b60008251118061461e5750805b156134d35761462d8383614965565b50505050565b600054610100900460ff168061464c575060005460ff16155b6146af5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156146da576000805460ff1961ff0019909116610100171660011790555b6146e2614a67565b6146ea614b21565b80156112a7576000805461ff001916905550565b600054610100900460ff1680614717575060005460ff16155b61477a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156147a5576000805460ff1961ff0019909116610100171660011790555b6147ad614a67565b6147b682614bd8565b8015611fd3576000805461ff00191690555050565b60008183116147da57816147dc565b825b9392505050565b6000805b826001600160a01b031684828151811061481157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146147dc578061483181615783565b9150506147e7565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000614896336126bf565b156148aa575060131936013560601c613398565b336145a4565b803b6149245760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610977565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6149db5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610977565b600080846001600160a01b0316846040516149f691906154c4565b600060405180830381855af49150503d8060008114614a31576040519150601f19603f3d011682016040523d82523d6000602084013e614a36565b606091505b5091509150614a5e828260405180606001604052806027815260200161580f60279139614caf565b95945050505050565b600054610100900460ff1680614a80575060005460ff16155b614ae35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156146ea576000805460ff1961ff00199091166101001716600117905580156112a7576000805461ff001916905550565b600054610100900460ff1680614b3a575060005460ff16155b614b9d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015614bc8576000805460ff1961ff0019909116610100171660011790555b6146ea614bd36144f6565b614839565b600054610100900460ff1680614bf1575060005460ff16155b614c545760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015614c7f576000805460ff1961ff0019909116610100171660011790555b606580546001600160a01b0319166001600160a01b0384161790558015611fd3576000805461ff00191690555050565b60608315614cbe5750816147dc565b825115614cce5782518084602001fd5b8160405162461bcd60e51b815260040161097791906155e8565b828054614cf490615748565b90600052602060002090601f016020900481019282614d165760008555614d5c565b82601f10614d2f57805160ff1916838001178555614d5c565b82800160010185558215614d5c579182015b82811115614d5c578251825591602001919060010190614d41565b50614d68929150614da4565b5090565b508054614d7890615748565b6000825580601f10614d8a57506112a7565b601f0160209004906000526020600020908101906112a791905b5b80821115614d685760008155600101614da5565b80356001600160a01b03811681146126d157600080fd5b600082601f830112614de0578081fd5b81356020614df5614df0836156c9565b615698565b8281528181019085830183850287018401881015614e11578586fd5b855b85811015614e3657614e2482614db9565b84529284019290840190600101614e13565b5090979650505050505050565b600082601f830112614e53578081fd5b81356020614e63614df0836156c9565b8281528181019085830183850287018401881015614e7f578586fd5b855b85811015614e3657813584529284019290840190600101614e81565b600082601f830112614ead578081fd5b81356020614ebd614df0836156c9565b82815281810190858301855b85811015614e3657614ee0898684358b0101614efd565b84529284019290840190600101614ec9565b80356126d1816157e0565b600082601f830112614f0d578081fd5b813567ffffffffffffffff811115614f2757614f276157ca565b614f3a601f8201601f1916602001615698565b818152846020838601011115614f4e578283fd5b816020850160208301379081016020019190915292915050565b8035600481106126d157600080fd5b80356fffffffffffffffffffffffffffffffff811681146126d157600080fd5b600060208284031215614fa8578081fd5b6147dc82614db9565b60008060408385031215614fc3578081fd5b614fcc83614db9565b9150602083013567ffffffffffffffff811115614fe7578182fd5b614ff385828601614efd565b9150509250929050565b6000806040838503121561500f578182fd5b61501883614db9565b915060208301356003811061502b578182fd5b809150509250929050565b60008060006060848603121561504a578081fd5b61505384614db9565b95602085013595506040909401359392505050565b600080600080600060a0868803121561507f578283fd5b853567ffffffffffffffff80821115615096578485fd5b6150a289838a01614e43565b965060208801359150808211156150b7578485fd5b6150c389838a01614dd0565b955060408801359150808211156150d8578485fd5b6150e489838a01614e43565b945060608801359150808211156150f9578283fd5b61510589838a01614e9d565b9350608088013591508082111561511a578283fd5b5061512788828901614e43565b9150509295509295909350565b60008060408385031215615146578182fd5b823567ffffffffffffffff8082111561515d578384fd5b61516986838701614e9d565b9350602085013591508082111561517e578283fd5b50614ff385828601614e9d565b60006020828403121561519c578081fd5b81516147dc816157e0565b6000602082840312156151b8578081fd5b5035919050565b600080604083850312156151d1578182fd5b823591506151e160208401614db9565b90509250929050565b6000806000606084860312156151fe578081fd5b8335925061520e60208501614db9565b9150604084013590509250925092565b60008060408385031215615230578182fd5b50508035926020909101359150565b600080600060608486031215615253578081fd5b833592506020840135915061526a60408501614db9565b90509250925092565b600080600060608486031215615287578081fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156152b8578485fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff808211156152eb578384fd5b6152f78b838c01614efd565b945060a08a013591508082111561530c578384fd5b506153198a828b01614efd565b92505061532860c08901614db9565b905092959891949750929550565b600060208284031215615347578081fd5b813567ffffffffffffffff81111561535d578182fd5b61435b84828501614efd565b600080600080600080600080610100898b031215615385578182fd5b883567ffffffffffffffff8082111561539c578384fd5b6153a88c838d01614efd565b99506153b660208c01614db9565b98506153c460408c01614db9565b97506153d260608c01614ef2565b96506153e060808c01614f77565b95506153ee60a08c01614f68565b945060c08b0135915080821115615403578384fd5b61540f8c838d01614e9d565b935060e08b0135915080821115615424578283fd5b506154318b828c01614e9d565b9150509295985092959890939650565b60008060408385031215615453578182fd5b823567ffffffffffffffff8082111561546a578384fd5b61547686838701614efd565b9350602085013591508082111561548b578283fd5b50614ff385828601614efd565b600081518084526154b081602086016020860161571c565b601f01601f19169290920160200192915050565b600082516154d681846020870161571c565b9190910192915050565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a085015261551e82850188615498565b915083820360c08501526155328287615498565b925080851660e085015250509998505050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561558c5783516001600160a01b031683529284019291840191600101615567565b50909695505050505050565b6000604082526155ab6040830185615498565b90508260208301529392505050565b60208101600383106155ce576155ce6157b4565b91905290565b60208101600483106155ce576155ce6157b4565b6000602082526147dc6020830184615498565b6000602082526001600160a01b038351166020830152602083015160408301526040830151606083015260608301516080830152608083015161564260a084018215159052565b5060a08301516101008060c085015261565f610120850183615498565b915060c0850151601f198584030160e086015261567c8382615498565b92505060e0850151612981828601826001600160a01b03169052565b604051601f8201601f1916810167ffffffffffffffff811182821017156156c1576156c16157ca565b604052919050565b600067ffffffffffffffff8211156156e3576156e36157ca565b5060209081020190565b600082198211156157005761570061579e565b500190565b6000828210156157175761571761579e565b500390565b60005b8381101561573757818101518382015260200161571f565b8381111561462d5750506000910152565b60028104600182168061575c57607f821691505b6020821081141561577d57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156157975761579761579e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146112a757600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a",
  "deployedBytecode": "0x6080604052600436106102e65760003560e01c806380afdea811610184578063c45a0155116100d6578063dd245cac1161008a578063e979a2ce11610064578063e979a2ce146108be578063f2fde38b146108de578063f84ed61d146108fe576102e6565b8063dd245cac14610854578063dde8d0d914610874578063e26b013b146108a1576102e6565b8063c5b26447116100bb578063c5b26447146107ea578063c7c02ef51461080a578063d87972621461081f576102e6565b8063c45a0155146107ae578063c53be4c8146107cf576102e6565b806398c9adff11610138578063aaf10f4211610112578063aaf10f4214610759578063b9ff5f1d1461076e578063c12ed14f1461078e576102e6565b806398c9adff146106e5578063a056e1fd14610719578063a10fc67214610739576102e6565b80638da5cb5b116101695780638da5cb5b1461068357806396bab612146106b0578063978d7783146106c5576102e6565b806380afdea8146106135780638a8b093314610663576102e6565b80635b648b0a1161023d57806363a15202116101f15780636ab799f1116101cb5780636ab799f1146105be5780636b2877d4146105de578063715018a6146105fe576102e6565b806363a1520214610540578063645b8b1b146105605780636a29afdc1461059e576102e6565b80635f784b8a116102225780635f784b8a1461049b5780636184533f146104c9578063633f7155146104f6576102e6565b80635b648b0a1461045e5780635bbf11b214610486576102e6565b80633a8be7f51161029f5780634f1ef286116102795780634f1ef286146103ed5780634fb95bc614610400578063572b6c051461042e576102e6565b80633a8be7f5146103985780633be32f7d146103b85780633c69d94f146103cd576102e6565b80630d3fbd05116102d05780630d3fbd05146103385780633659cfe614610358578063377dd46e14610378576102e6565b8062c5fd24146102eb5780630c97282c1461030d575b600080fd5b3480156102f757600080fd5b5061030b610306366004614ffd565b61091e565b005b34801561031957600080fd5b506103226109cd565b60405161032f91906155e8565b60405180910390f35b34801561034457600080fd5b5061030b610353366004615068565b610a5b565b34801561036457600080fd5b5061030b610373366004614f97565b61112e565b34801561038457600080fd5b5061030b61039336600461521e565b6112aa565b3480156103a457600080fd5b5061030b6103b3366004615068565b611327565b3480156103c457600080fd5b5061030b611a8d565b3480156103d957600080fd5b5061030b6103e8366004615369565b611c58565b61030b6103fb366004614fb1565b611e6a565b34801561040c57600080fd5b5061042061041b36600461521e565b611fd7565b60405190815260200161032f565b34801561043a57600080fd5b5061044e610449366004614f97565b6126bf565b604051901515815260200161032f565b34801561046a57600080fd5b50610104546104799060ff1681565b60405161032f91906155d4565b34801561049257600080fd5b5061030b6126d6565b3480156104a757600080fd5b506104bb6104b636600461523f565b612789565b60405161032f929190615598565b3480156104d557600080fd5b506104e96104e436600461521e565b61283e565b60405161032f919061554b565b34801561050257600080fd5b5061052b610511366004614f97565b610103602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561054c57600080fd5b5061030b61055b3660046151a7565b61298b565b34801561056c57600080fd5b5061059161057b366004614f97565b6101056020526000908152604090205460ff1681565b60405161032f91906155ba565b3480156105aa57600080fd5b5061030b6105b9366004615036565b612b30565b3480156105ca57600080fd5b5061030b6105d93660046151a7565b612bc8565b3480156105ea57600080fd5b5061030b6105f93660046151ea565b612ece565b34801561060a57600080fd5b5061030b613234565b34801561061f57600080fd5b50610108546106429061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561066f57600080fd5b5061030b61067e36600461521e565b61329d565b34801561068f57600080fd5b5061069861338b565b6040516001600160a01b03909116815260200161032f565b3480156106bc57600080fd5b5061052b61339b565b3480156106d157600080fd5b5061030b6106e0366004615134565b6133d7565b3480156106f157600080fd5b506107056107003660046151a7565b6134d8565b60405161032f9897969594939291906154e0565b34801561072557600080fd5b5061030b61073436600461529e565b613646565b34801561074557600080fd5b50610322610754366004614f97565b613bc4565b34801561076557600080fd5b50610698613bde565b34801561077a57600080fd5b5061030b610789366004615441565b613c16565b34801561079a57600080fd5b506106986107a9366004615273565b613ca5565b3480156107ba57600080fd5b5061010054610698906001600160a01b031681565b3480156107db57600080fd5b506101085461044e9060ff1681565b3480156107f657600080fd5b5061044e6108053660046151bf565b613cea565b34801561081657600080fd5b5061052b613ffb565b34801561082b57600080fd5b5061052b61083a366004614f97565b610102602052600090815260409020805460019091015482565b34801561086057600080fd5b5061032261086f366004615336565b614028565b34801561088057600080fd5b5061089461088f36600461521e565b61404c565b60405161032f91906155fb565b3480156108ad57600080fd5b50610106546101075461052b919082565b3480156108ca57600080fd5b5061030b6108d9366004615336565b614363565b3480156108ea57600080fd5b5061030b6108f9366004614f97565b6143a4565b34801561090a57600080fd5b5061030b610919366004615336565b614486565b6109266144f6565b6001600160a01b031661093761338b565b6001600160a01b0316146109805760405162461bcd60e51b815260206004820181905260248201526000805160206157ef83398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010560205260409020805482919060ff191660018360028111156109c457634e487b7160e01b600052602160045260246000fd5b02179055505050565b60fb80546109da90615748565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0690615748565b8015610a535780601f10610a2857610100808354040283529160200191610a53565b820191906000526020600020905b815481529060010190602001808311610a3657829003601f168201915b505050505081565b60006101056000610a6a6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610aa657634e487b7160e01b600052602160045260246000fd5b14610ae85760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30610b036144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610b4b57600080fd5b505af1158015610b5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b83919061518b565b610bcf5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b8251845114610c465760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610977565b8051845114610cbd5760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610977565b60005b85518110156111265760005b85518110156111135760ff6000888381518110610cf957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b0316610d256144f6565b6001600160a01b031614610d6c5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610977565b828281518110610d8c57634e487b7160e01b600052603260045260246000fd5b602002602001015160001415610de45760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610977565b6040518060400160405280858481518110610e0f57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001848481518110610e3c57634e487b7160e01b600052603260045260246000fd5b602002602001015142610e4f91906156ed565b81525060fd6000898581518110610e7657634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000878581518110610eae57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000888481518110610ee657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610f2a929190614ce8565b506020820151816001015590505060fe6000888481518110610f5c57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000868481518110610f9457634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020868281518110610fca57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061102757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031687838151811061105857634e487b7160e01b600052603260045260246000fd5b60200260200101516110686144f6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc8798885815181106110b257634e487b7160e01b600052603260045260246000fd5b60200260200101518786815181106110da57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516110f9929190918252602082015260400190565b60405180910390a48061110b81615783565b915050610ccc565b508061111e81615783565b915050610cc0565b505050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156111bc5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610977565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166112177f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146112825760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610977565b61128b816145ab565b604080516000808252602082019092526112a791839190614608565b50565b6112b26144f6565b6001600160a01b03166112c361338b565b6001600160a01b0316146113075760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b604080518082019091528281526020018190526101069190915561010755565b600061010560006113366144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561137257634e487b7160e01b600052602160045260246000fd5b146113b45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c306113cf6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561141757600080fd5b505af115801561142b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144f919061518b565b61149b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b82518451146115125760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610977565b80518451146115895760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610977565b60005b85518110156111265760005b8551811015611a7a5760ff60008883815181106115c557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b03166115f16144f6565b6001600160a01b0316146116385760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610977565b82818151811061165857634e487b7160e01b600052603260045260246000fd5b6020026020010151600014156116b05760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610977565b6116b86144f6565b6001600160a01b03168682815181106116e157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561174b5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610977565b604051806040016040528085838151811061177657634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018483815181106117a357634e487b7160e01b600052603260045260246000fd5b6020026020010151426117b691906156ed565b81525060fd60008985815181106117dd57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600087848151811061181557634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600088848151811061184d57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190611891929190614ce8565b506020820151816001015590505060fe60008884815181106118c357634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008683815181106118fb57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002086828151811061193157634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061198e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03168783815181106119bf57634e487b7160e01b600052603260045260246000fd5b60200260200101516119cf6144f6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879888581518110611a1957634e487b7160e01b600052603260045260246000fd5b6020026020010151878681518110611a4157634e487b7160e01b600052603260045260246000fd5b6020026020010151604051611a60929190918252602082015260400190565b60405180910390a480611a7281615783565b915050611598565b5080611a8581615783565b91505061158c565b60006101056000611a9c6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611ad857634e487b7160e01b600052602160045260246000fd5b14611b1a5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30611b356144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611b7d57600080fd5b505af1158015611b91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb5919061518b565b611c015760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b60026101056000611c106144f6565b6001600160a01b031681526020810191909152604001600020805460ff19166001836002811115611c5157634e487b7160e01b600052602160045260246000fd5b0217905550565b600054610100900460ff1680611c71575060005460ff16155b611cd45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015611cff576000805460ff1961ff0019909116610100171660011790555b61010080546001600160a01b0319166001600160a01b038a16179055611d23614633565b8851611d369060fb9060208c0190614ce8565b50611d40876146fe565b61010880546fffffffffffffffffffffffffffffffff87166101000270ffffffffffffffffffffffffffffffff001989151560ff1993841617161790915561010480548692166001836003811115611da857634e487b7160e01b600052602160045260246000fd5b021790555060005b8351811015611e4c57828181518110611dd957634e487b7160e01b600052603260045260246000fd5b602002602001015160fc858381518110611e0357634e487b7160e01b600052603260045260246000fd5b6020026020010151604051611e1891906154c4565b90815260200160405180910390209080519060200190611e39929190614ce8565b5080611e4481615783565b915050611db0565b508015611e5f576000805461ff00191690555b505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611ef85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610977565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611f537f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611fbe5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610977565b611fc7826145ab565b611fd382826001614608565b5050565b600082815260ff6020818152604080842081516101008101835281546001600160a01b03168152600182015493810193909352600281015491830191909152600381015460608301526004810154909216151560808201526005820180548693859392909160a08401919061204b90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461207790615748565b80156120c45780601f10612099576101008083540402835291602001916120c4565b820191906000526020600020905b8154815290600101906020018083116120a757829003601f168201915b505050505081526020016006820180546120dd90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461210990615748565b80156121565780601f1061212b57610100808354040283529160200191612156565b820191906000526020600020905b81548152906001019060200180831161213957829003601f168201915b5050509183525050600791909101546001600160a01b031660209091015290506121ac61010260006121866144f6565b6001600160a01b03168152602081019190915260400160002060010154610107546147cb565b816060015161010360006121be6144f6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546121ec91906156ed565b111561223a5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610977565b6000805261010260209081527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3215460608301516101039092527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f805490916122a0916156ed565b11156122ee5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610977565b600085815260ff6020819052604090912060040154166123765760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610977565b600085815260fd602090815260408083208784529091528120816123986144f6565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a825260ff9094529190912054919250166123d56144f6565b6001600160a01b031614156123f8576123f142620f42406156ed565b9050612435565b806124355760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610977565b8561243e6144f6565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051612481929190918252602082015260400190565b60405180910390a3600086815260ff6020818152604080842081516101008101835281546001600160a01b031681526001820154938101939093526002810154918301919091526003810154606083015260048101549092161515608082015260058201805491929160a0840191906124f990615748565b80601f016020809104026020016040519081016040528092919081815260200182805461252590615748565b80156125725780601f1061254757610100808354040283529160200191612572565b820191906000526020600020905b81548152906001019060200180831161255557829003601f168201915b5050505050815260200160068201805461258b90615748565b80601f01602080910402602001604051908101604052809291908181526020018280546125b790615748565b80156126045780601f106125d957610100808354040283529160200191612604565b820191906000526020600020905b8154815290600101906020018083116125e757829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152606081015190915061010360006126376144f6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101600082825461266991906156ed565b9091555050606081015160008080526101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f8080549091906126af9084906156ed565b9091555091979650505050505050565b6065546001600160a01b038281169116145b919050565b600261010560006126e56144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561272157634e487b7160e01b600052602160045260246000fd5b1461277a5760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b6064820152608401610977565b60006101056000611c106144f6565b60fd6020908152600093845260408085208252928452828420905282529020805481906127b590615748565b80601f01602080910402602001604051908101604052809291908181526020018280546127e190615748565b801561282e5780601f106128035761010080835404028352916020019161282e565b820191906000526020600020905b81548152906001019060200180831161281157829003601f168201915b5050505050908060010154905082565b600082815260fe6020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156128a557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612887575b50505050509050600080600090505b825181101561298157600086815260fe6020908152604080832088845290915290208054829081106128f657634e487b7160e01b600052603260045260246000fd5b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b0390921680855291909252912060010154909250421061296f5782818151811061295957634e487b7160e01b600052603260045260246000fd5b6020026020010160006001600160a01b03168152505b8061297981615783565b9150506128b4565b5090949350505050565b600081815260ff60205260409020600701546001600160a01b03163314612a1a5760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610977565b600081815260ff60208190526040909120600401541615612a7d5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610977565b600081815260ff60209081526040808320600381015490546001600160a01b031684526101039092528220805491929091612ab99084906156ed565b9091555050600081815260ff602090815260408220600301548280526101039091527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f805491929091612b0d9084906156ed565b9091555050600090815260ff60205260409020600401805460ff19166001179055565b612b386144f6565b6001600160a01b0316612b4961338b565b6001600160a01b031614612b8d5760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b60408051808201825292835260208084019283526001600160a01b039094166000908152610102909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b0316612bea6144f6565b6001600160a01b031614612c575760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b60006101056000612c666144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612ca257634e487b7160e01b600052602160045260246000fd5b14612ce45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30612cff6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612d4757600080fd5b505af1158015612d5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d7f919061518b565b612dcb5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b600082815260ff60205260408120600301549061010390612dea6144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254612e1c9190615705565b9091555050600082815260ff6020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612e6c6005830182614d6c565b612e7a600683016000614d6c565b5060070180546001600160a01b031916905581612e956144f6565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b60006101056000612edd6144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612f1957634e487b7160e01b600052602160045260246000fd5b14612f5b5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30612f766144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612fbe57600080fd5b505af1158015612fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ff6919061518b565b6130425760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b600083815260ff602052604090205483906001600160a01b03166130646144f6565b6001600160a01b0316146130d15760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b600084815260fd6020908152604080832085845282528083206001600160a01b03871684529091528120906131068282614d6c565b50600060019190910181905584815260fe60209081526040808320858452825280832080548251818502810185019093528083526131829383018282801561317757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311613159575b5050505050856147e3565b600086815260fe602090815260408083208784529091529020805491925090829081106131bf57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690556001600160a01b038416856131eb6144f6565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb8660405161322591815260200190565b60405180910390a45050505050565b61323c6144f6565b6001600160a01b031661324d61338b565b6001600160a01b0316146132915760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b61329b6000614839565b565b6132b2610100546001600160a01b0316331490565b6133245760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610977565b60408051808201909152918252602080830191825260008052610102905290517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32055517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32155565b6033546001600160a01b03165b90565b336000908152610103602090815260408083206001908101546101029093529083200154610107548392916133cf916147cb565b915091509091565b6133df6144f6565b6001600160a01b03166133f061338b565b6001600160a01b0316146134345760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b60005b82518110156134d35781818151811061346057634e487b7160e01b600052603260045260246000fd5b602002602001015160fc84838151811061348a57634e487b7160e01b600052603260045260246000fd5b602002602001015160405161349f91906154c4565b908152602001604051809103902090805190602001906134c0929190614ce8565b50806134cb81615783565b915050613437565b505050565b60ff602081905260009182526040909120805460018201546002830154600384015460048501546005860180546001600160a01b039096169794969395929491909116929161352690615748565b80601f016020809104026020016040519081016040528092919081815260200182805461355290615748565b801561359f5780601f106135745761010080835404028352916020019161359f565b820191906000526020600020905b81548152906001019060200180831161358257829003601f168201915b5050505050908060060180546135b490615748565b80601f01602080910402602001604051908101604052809291908181526020018280546135e090615748565b801561362d5780601f106136025761010080835404028352916020019161362d565b820191906000526020600020905b81548152906001019060200180831161361057829003601f168201915b505050600790930154919250506001600160a01b031688565b600061010560006136556144f6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561369157634e487b7160e01b600052602160045260246000fd5b146136d35760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c306136ee6144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561373657600080fd5b505af115801561374a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061376e919061518b565b6137ba5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b836137ee61010260006137cb6144f6565b6001600160a01b03168152602081019190915260400160002054610106546147cb565b8161010360006137fc6144f6565b6001600160a01b0316815260208101919091526040016000205461382091906156ed565b111561386e5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610977565b600080527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb320546101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f546138c79083906156ed565b11156139155760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610977565b600088815260ff60205260409020546001600160a01b0316156139845760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610977565b8587116139b95760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610977565b60018611613a095760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610977565b84613a565760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f74206265203000000000000000000000000000000000006044820152606401610977565b604051806101000160405280613a6a6144f6565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f825260ff855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff19169115159190911790559183015180519192613b1f92600585019290910190614ce8565b5060c08201518051613b3b916006840191602090910190614ce8565b5060e09190910151600790910180546001600160a01b0319166001600160a01b03928316179055600089815260ff60209081526040918290205482518b81529182018a90529181018890528a9291909116907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b61010160205260009081526040902080546109da90615748565b6000613c117f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b613c1e6144f6565b6001600160a01b0316613c2f61338b565b6001600160a01b031614613c735760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b8060fc83604051613c8491906154c4565b908152602001604051809103902090805190602001906134d3929190614ce8565b60fe6020528260005260406000206020528160005260406000208181548110613ccd57600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613d0c6144f6565b6001600160a01b031614613d795760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610977565b60006101056000613d886144f6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115613dc457634e487b7160e01b600052602160045260246000fd5b14613e065760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610977565b610100546001600160a01b031663c7e1562c30613e216144f6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015613e6957600080fd5b505af1158015613e7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea1919061518b565b613eed5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610977565b6001600160a01b038316613f435760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610977565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b038616178155600301549061010390613f7b6144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254613fad9190615705565b9091555050600084815260ff60209081526040808320600301546001600160a01b03871684526101039092528220805491929091613fec9084906156ed565b90915550600195945050505050565b3360009081526101036020908152604080832054610102909252822054610106548392916133cf916147cb565b805160208183018101805160fc82529282019190930120915280546109da90615748565b6140a860405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b600083815260fd60209081526040808320858452825280832033845290915280822081518083019092528054829082906140e190615748565b80601f016020809104026020016040519081016040528092919081815260200182805461410d90615748565b801561415a5780601f1061412f5761010080835404028352916020019161415a565b820191906000526020600020905b81548152906001019060200180831161413d57829003601f168201915b5050509183525050600191820154602091820152600087815260ff808352604080832081516101008101835281546001600160a01b0316815295810154948601949094526002840154908501526003830154606085015260048301541615156080840152600582018054949550909360a0840191906141d890615748565b80601f016020809104026020016040519081016040528092919081815260200182805461420490615748565b80156142515780601f1061422657610100808354040283529160200191614251565b820191906000526020600020905b81548152906001019060200180831161423457829003601f168201915b5050505050815260200160068201805461426a90615748565b80601f016020809104026020016040519081016040528092919081815260200182805461429690615748565b80156142e35780601f106142b8576101008083540402835291602001916142e3565b820191906000526020600020905b8154815290600101906020018083116142c657829003601f168201915b5050509183525050600791909101546001600160a01b03908116602090920191909152815191925016331461435b5760208201516143535760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610977565b815160c08201525b949350505050565b8061010160006143716144f6565b6001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611fd3929190614ce8565b6143ac6144f6565b6001600160a01b03166143bd61338b565b6001600160a01b0316146144015760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b6001600160a01b03811661447d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610977565b6112a781614839565b61448e6144f6565b6001600160a01b031661449f61338b565b6001600160a01b0316146144e35760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b8051611fd39060fb906020840190614ce8565b6000614501336126bf565b15614515575060131936013560601c613398565b61452a610100546001600160a01b0316331490565b61459c5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610977565b6145a461488b565b9050613398565b6145b36144f6565b6001600160a01b03166145c461338b565b6001600160a01b0316146112a75760405162461bcd60e51b815260206004820181905260248201526000805160206157ef8339815191526044820152606401610977565b614611836148b0565b60008251118061461e5750805b156134d35761462d8383614965565b50505050565b600054610100900460ff168061464c575060005460ff16155b6146af5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156146da576000805460ff1961ff0019909116610100171660011790555b6146e2614a67565b6146ea614b21565b80156112a7576000805461ff001916905550565b600054610100900460ff1680614717575060005460ff16155b61477a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156147a5576000805460ff1961ff0019909116610100171660011790555b6147ad614a67565b6147b682614bd8565b8015611fd3576000805461ff00191690555050565b60008183116147da57816147dc565b825b9392505050565b6000805b826001600160a01b031684828151811061481157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146147dc578061483181615783565b9150506147e7565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000614896336126bf565b156148aa575060131936013560601c613398565b336145a4565b803b6149245760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610977565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6149db5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610977565b600080846001600160a01b0316846040516149f691906154c4565b600060405180830381855af49150503d8060008114614a31576040519150601f19603f3d011682016040523d82523d6000602084013e614a36565b606091505b5091509150614a5e828260405180606001604052806027815260200161580f60279139614caf565b95945050505050565b600054610100900460ff1680614a80575060005460ff16155b614ae35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff161580156146ea576000805460ff1961ff00199091166101001716600117905580156112a7576000805461ff001916905550565b600054610100900460ff1680614b3a575060005460ff16155b614b9d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015614bc8576000805460ff1961ff0019909116610100171660011790555b6146ea614bd36144f6565b614839565b600054610100900460ff1680614bf1575060005460ff16155b614c545760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610977565b600054610100900460ff16158015614c7f576000805460ff1961ff0019909116610100171660011790555b606580546001600160a01b0319166001600160a01b0384161790558015611fd3576000805461ff00191690555050565b60608315614cbe5750816147dc565b825115614cce5782518084602001fd5b8160405162461bcd60e51b815260040161097791906155e8565b828054614cf490615748565b90600052602060002090601f016020900481019282614d165760008555614d5c565b82601f10614d2f57805160ff1916838001178555614d5c565b82800160010185558215614d5c579182015b82811115614d5c578251825591602001919060010190614d41565b50614d68929150614da4565b5090565b508054614d7890615748565b6000825580601f10614d8a57506112a7565b601f0160209004906000526020600020908101906112a791905b5b80821115614d685760008155600101614da5565b80356001600160a01b03811681146126d157600080fd5b600082601f830112614de0578081fd5b81356020614df5614df0836156c9565b615698565b8281528181019085830183850287018401881015614e11578586fd5b855b85811015614e3657614e2482614db9565b84529284019290840190600101614e13565b5090979650505050505050565b600082601f830112614e53578081fd5b81356020614e63614df0836156c9565b8281528181019085830183850287018401881015614e7f578586fd5b855b85811015614e3657813584529284019290840190600101614e81565b600082601f830112614ead578081fd5b81356020614ebd614df0836156c9565b82815281810190858301855b85811015614e3657614ee0898684358b0101614efd565b84529284019290840190600101614ec9565b80356126d1816157e0565b600082601f830112614f0d578081fd5b813567ffffffffffffffff811115614f2757614f276157ca565b614f3a601f8201601f1916602001615698565b818152846020838601011115614f4e578283fd5b816020850160208301379081016020019190915292915050565b8035600481106126d157600080fd5b80356fffffffffffffffffffffffffffffffff811681146126d157600080fd5b600060208284031215614fa8578081fd5b6147dc82614db9565b60008060408385031215614fc3578081fd5b614fcc83614db9565b9150602083013567ffffffffffffffff811115614fe7578182fd5b614ff385828601614efd565b9150509250929050565b6000806040838503121561500f578182fd5b61501883614db9565b915060208301356003811061502b578182fd5b809150509250929050565b60008060006060848603121561504a578081fd5b61505384614db9565b95602085013595506040909401359392505050565b600080600080600060a0868803121561507f578283fd5b853567ffffffffffffffff80821115615096578485fd5b6150a289838a01614e43565b965060208801359150808211156150b7578485fd5b6150c389838a01614dd0565b955060408801359150808211156150d8578485fd5b6150e489838a01614e43565b945060608801359150808211156150f9578283fd5b61510589838a01614e9d565b9350608088013591508082111561511a578283fd5b5061512788828901614e43565b9150509295509295909350565b60008060408385031215615146578182fd5b823567ffffffffffffffff8082111561515d578384fd5b61516986838701614e9d565b9350602085013591508082111561517e578283fd5b50614ff385828601614e9d565b60006020828403121561519c578081fd5b81516147dc816157e0565b6000602082840312156151b8578081fd5b5035919050565b600080604083850312156151d1578182fd5b823591506151e160208401614db9565b90509250929050565b6000806000606084860312156151fe578081fd5b8335925061520e60208501614db9565b9150604084013590509250925092565b60008060408385031215615230578182fd5b50508035926020909101359150565b600080600060608486031215615253578081fd5b833592506020840135915061526a60408501614db9565b90509250925092565b600080600060608486031215615287578081fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156152b8578485fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff808211156152eb578384fd5b6152f78b838c01614efd565b945060a08a013591508082111561530c578384fd5b506153198a828b01614efd565b92505061532860c08901614db9565b905092959891949750929550565b600060208284031215615347578081fd5b813567ffffffffffffffff81111561535d578182fd5b61435b84828501614efd565b600080600080600080600080610100898b031215615385578182fd5b883567ffffffffffffffff8082111561539c578384fd5b6153a88c838d01614efd565b99506153b660208c01614db9565b98506153c460408c01614db9565b97506153d260608c01614ef2565b96506153e060808c01614f77565b95506153ee60a08c01614f68565b945060c08b0135915080821115615403578384fd5b61540f8c838d01614e9d565b935060e08b0135915080821115615424578283fd5b506154318b828c01614e9d565b9150509295985092959890939650565b60008060408385031215615453578182fd5b823567ffffffffffffffff8082111561546a578384fd5b61547686838701614efd565b9350602085013591508082111561548b578283fd5b50614ff385828601614efd565b600081518084526154b081602086016020860161571c565b601f01601f19169290920160200192915050565b600082516154d681846020870161571c565b9190910192915050565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a085015261551e82850188615498565b915083820360c08501526155328287615498565b925080851660e085015250509998505050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561558c5783516001600160a01b031683529284019291840191600101615567565b50909695505050505050565b6000604082526155ab6040830185615498565b90508260208301529392505050565b60208101600383106155ce576155ce6157b4565b91905290565b60208101600483106155ce576155ce6157b4565b6000602082526147dc6020830184615498565b6000602082526001600160a01b038351166020830152602083015160408301526040830151606083015260608301516080830152608083015161564260a084018215159052565b5060a08301516101008060c085015261565f610120850183615498565b915060c0850151601f198584030160e086015261567c8382615498565b92505060e0850151612981828601826001600160a01b03169052565b604051601f8201601f1916810167ffffffffffffffff811182821017156156c1576156c16157ca565b604052919050565b600067ffffffffffffffff8211156156e3576156e36157ca565b5060209081020190565b600082198211156157005761570061579e565b500190565b6000828210156157175761571761579e565b500390565b60005b8381101561573757818101518382015260200161571f565b8381111561462d5750506000910152565b60028104600182168061575c57607f821691505b6020821081141561577d57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156157975761579761579e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146112a757600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
