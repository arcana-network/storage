export default {
  abi: [
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32',
        },
      ],
      name: 'getFile',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'fileSize',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'uploaded',
              type: 'bool',
            },
            {
              internalType: 'bytes',
              name: 'encryptedMetaData',
              type: 'bytes',
            },
            {
              internalType: 'address',
              name: 'storageNode',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'app',
              type: 'address',
            },
          ],
          internalType: 'struct IDID.File',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_did',
          type: 'bytes32',
        },
      ],
      name: 'getFileOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
};
