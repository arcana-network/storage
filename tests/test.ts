import test from 'ava'
import sinon from 'sinon'
import { BigNumber, ethers, Wallet } from 'ethers'
import { createEngine } from './sub_provider'
import fs from 'fs'
import nock from 'nock'
import { Blob as nBlob } from 'blob-polyfill'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import { providerFromEngine } from 'eth-json-rpc-middleware'

// SDK imports
import { StorageProvider } from '../src'
import * as utils from '../src/Utils'
import { parseData } from './utils'
import { CustomError } from '../src/types'
import DID from '../src/contracts/DID'
import DKG from '../src/contracts/DKG'

// Load contract addresses
const sContracts: any = fs.readFileSync('./tests/contracts.json')
const oContracts = JSON.parse(sContracts)

const gateway = 'http://localhost:9010/'
const appId = 1
const appAddress = '445007f942f9Ba718953094Bbe3205B9484cAfd2'
const debug = false

// To ignore strict http request/response rules
axios.defaults.adapter = httpAdapter
const nockOptions = { 'Access-Control-Allow-Origin': '*' }

/*
Not using moxis because of axios instance initialization in SDK
Below to be covered in Integration Tests
-> Download  (due to tus client instance)
*/

function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const makeEmail = () => {
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

let file
// arcanaInstance,
// receiverInstance,
const did = '0x4de0e96b0a8886e42a2c35b57df8a9d58a93b5bff655bc37a30e2ab8e29dc066'

function meta_tx_nock (reply_data) {
  const nockMetaReply = async (uri, body: any) => {
    return reply_data ?? { data: 'dummy data', token: 'dummy token' }
  }

  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .post('/api/v1/meta-tx/')
    .reply(200, nockMetaReply)
    .intercept('/api/v1/meta-tx/', 'OPTIONS')
    .reply(200, nockMetaReply, { 'access-control-allow-headers': 'Authorization' })
}

function mock_dkg (reply_data) {
  nock('https://dkgnode1.arcana.network:443')
    .defaultReplyHeaders(nockOptions)
    .post('/rpc')
    .times(6)
    .reply(200, { jsonrpc: '2.0', result: { ok: true }, id: 10 })
}

async function nockSetup () {
  nock('http://localhost:9010')
    .defaultReplyHeaders(nockOptions)
    .persist()
    .get('/api/v1/get-config/')
    .reply(200, {
      Factory: oContracts.Factory,
      Forwarder: oContracts.Forwarder,
      RPC_URL: 'http://localhost:10002',
      DID: oContracts.DID,
      DKG: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
    })
    .post('/api/v1/login/')
    .reply(200, { token: '123456789' })
    .get('/api/v1/get-nonce/')
    .query(true)
    .reply(200, '0')
    .get('/api/v1/get-address/')
    .query(true)
    .reply(200, { address: oContracts.App })
    .intercept('/api/v1/get-address/', 'OPTIONS')
    .query(true)
    .reply(200, { address: oContracts.App }, { 'access-control-allow-headers': 'Authorization' })
    .get('/api/v1/get-node-address/')
    .query(true)
    .reply(200, { host: 'http://localhost:3000/', address: storage_node.address })

  nock('http://localhost:3000')
    .persist()
    .defaultReplyHeaders(nockOptions)
    .patch((p) => p.startsWith('/api/v2/file/'))
    .reply(200, {
      hash: '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e'
    })
    .post((p) => p.startsWith('/api/v2/file/'))
    .reply(200, {})
}

function getCurrentEpochDetails () {
  return ethers.utils.defaultAbiCoder.encode(
    [
      'tuple(string declaredIp, uint position, uint pubKx, uint pubKy,string tmP2PListenAddress,string p2pListenAddress)[]'
    ],
    [
      [
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(1),
          pubKx: BigNumber.from('29023421385368379144749466045924017514934229958180852799451398628000593771667'),
          pubKy: BigNumber.from('31632158778368581637676511185062566059198308712876704725543144993632262155464'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        },
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(2),
          pubKx: BigNumber.from('105719267757522549686383951453889518570805320580847799971673920448991999863268'),
          pubKy: BigNumber.from('12311889399951856112539425386359305279151271210811891657961588078446721210801'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        },
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(3),
          pubKx: BigNumber.from('112513454780213693752054630002769173645973927254986348958538391710171734325064'),
          pubKy: BigNumber.from('31826403948237730820406540123018982546704465196666925150128355254483964682271'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        },
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(4),
          pubKx: BigNumber.from('103022124116237959935952092341458720857383888117879935947184525301185593633427'),
          pubKy: BigNumber.from('83428276264331813311663241272832111383329363811859329412601611536906464022186'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        },
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(5),
          pubKx: BigNumber.from('72082384183905358797739369765923546941331333550297636524350044306990429216270'),
          pubKy: BigNumber.from('661783827736034504670612788123848346528644035307464845748154787461466575102'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        },
        {
          declaredIp: 'dkgnode1.arcana.network:443',
          position: BigNumber.from(6),
          pubKx: BigNumber.from('30438236858857419456992904193833033911277657186396590512267279659738218054034'),
          pubKy: BigNumber.from('27076479865999379327196017777333283283075678191787288284998453473449446886409'),
          p2pListenAddress: 'u',
          tmP2PListenAddress: 't'
        }
      ]
    ]
  )
}

function sinonMockObjectSetup () {
  sinon.replace(utils, 'checkTxnStatus', () => Promise.resolve())
  sinon.replace(utils, 'getFile', () => Promise.resolve({ app: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9' }))
}

async function mockFile () {
  // file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
  // file = new File([file], "picsum_img", { type: file.type });
  return new nBlob([await (await fetch('https://picsum.photos/id/872/200/300')).arrayBuffer()])
}

// Wallet Setup
const memonic = 'test test test test test test test test test test test junk'
const path = "m/44'/60'/0'/0/"

const deployer = ethers.Wallet.fromMnemonic(memonic, path + '0')
const gateway_node = ethers.Wallet.fromMnemonic(memonic, path + '1')
const storage_node = ethers.Wallet.fromMnemonic(memonic, path + '2')
const bridge = ethers.Wallet.fromMnemonic(memonic, path + '3')
const arcanaWallet = ethers.Wallet.fromMnemonic(memonic, path + '4')
const receiverWallet = ethers.Wallet.fromMnemonic(memonic, path + '5')

// shared fixture
let fixture

// Mock server & stub setup
test.serial.before(async (t) => {
  // Mock gateway response(s) setup
  nockSetup()
  // Mock basic Storage utils
  sinonMockObjectSetup()
  // File prep
  file = await mockFile()
  file.name = 'test_file'
})

// TODO: get request handler in arrays
async function createStorageInstance (wallet: Wallet, middleware?) {
  const engine = createEngine(wallet.address)

  if (middleware) {
    engine.push(middleware)
  }

  const instance = await StorageProvider.init({
    appAddress,
    email: 'test@email.com',
    gateway,
    debug,
    chainId: 100,
    provider: providerFromEngine(engine)
  })

  return Promise.resolve(instance)
}

test.serial('Upload file', async (t) => {
  meta_tx_nock(undefined)

  const arcanaInstance = await createStorageInstance(arcanaWallet, (req, res, next, end) => {
    switch (req.method) {
      case 'eth_getTransactionByHash':
        res.result = {
          blockHash: '0x8e38b4dbf6b11fcc3b9dee84fb7986e29ca0a02cecd8977c161ff7333329681e',
          blockNumber: '0xf4240',
          hash: '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e',
          chainId: '0x0',
          from: '0x32be343b94f860124dc4fee278fdcbd38c102d88',
          gas: '0xc350',
          gasPrice: '0xdf8475800',
          input: '0x',
          nonce: '0x43eb',
          r: '0x3b08715b4403c792b8c7567edea634088bedcd7f60d9352b1f16c69830f3afd5',
          s: '0x10b9afb67d2ec8b956f0e1dbc07eb79152904f3a7bf789fc869db56320adfe09',
          to: '0xdf190dc7190dfba737d7777a163445b7fff16133',
          transactionIndex: '0x1',
          type: '0x0',
          v: '0x1c',
          value: '0x6113a84987be800'
        }
        break

      case 'eth_getTransactionReceipt':
        res.result = {
          transactionHash: '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e',
          blockHash: '0x8e38b4dbf6b11fcc3b9dee84fb7986e29ca0a02cecd8977c161ff7333329681e',
          blockNumber: '0xf4240',
          logs: [],
          contractAddress: null,
          effectiveGasPrice: '0xdf8475800',
          cumulativeGasUsed: '0xc444',
          from: '0x32be343b94f860124dc4fee278fdcbd38c102d88',
          gasUsed: '0x5208',
          logsBloom:
            '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          status: '0x1',
          to: '0xdf190dc7190dfba737d7777a163445b7fff16133',
          transactionIndex: '0x1',
          type: '0x0'
        }
        break
      case 'eth_call': {
        const data = parseData(
          {
            value: ethers.utils.parseEther('0'),
            data: req.params[0].data
          },
          DKG.abi
        )

        if (data.name === 'getCurrentEpochDetails') {
          res.result = getCurrentEpochDetails()
        }
        break
      }
    }

    end()
  })

  const upload = await arcanaInstance.getUploader()
  await t.notThrowsAsync(upload.upload(file))
})

test.skip('Download file', async () => {
  // unable to fake key shares responses
})

test.serial.skip('Metadata URL', async (t) => {
  // Skipped because axios need additional transformation for nodejs env
  // refer: https://stackoverflow.com/questions/63938549/axios-data-should-be-a-string-buffer-or-uint8array
  nock('http://localhost:3000')
    .defaultReplyHeaders(nockOptions)
    .post('/api/v1/nft')
    .reply(200, (req) => {
      Promise.resolve({ data: { request: { responseURL: 'dummy.image.url' } } })
    })

  nock(gateway)
    .post('/api/v1/metadata')
    .reply(201, Promise.resolve({ request: { responseURL: 'dummy.metadata.url' } }))
  const arcanaInstance = await createStorageInstance(arcanaWallet)
  const metadataURL = await arcanaInstance.makeMetadataURL('test', 'test description', did, file)

  t.is(metadataURL, 'dummy.metadata.url'.concat('/', did))
})

test.serial('Share file', async (t) => {
  t.plan(4)
  meta_tx_nock(undefined)

  const middleware = (req, res, next, end) => {
    const data = parseData(
      {
        value: ethers.utils.parseEther('0'),
        data: req.params[0].data
      },
      DID.abi
    )

    switch (data.name) {
      case 'getRuleSet':
        res.result = ethers.constants.HashZero
    }
    end()
  }

  const arcanaInstance = await createStorageInstance(arcanaWallet, middleware)

  const access = await arcanaInstance.getAccess()

  // Now check whether it shows up receipt user list
  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/shared-files/')
    .query(true)
    .reply(200, [{ did: did.substring(2), size: file.size }], { 'access-control-allow-headers': 'Authorization' })
    .get('/api/v1/files/shared/total/')
    .reply(200, { data: 0 })
    .get('/api/v1/get-hash-data/?hash=0x0000000000000000000000000000000000000000000000000000000000000000')
    .reply(200, null)
    .post('/api/v1/update-hash/')
    .reply(200, {})

  const tx = await access.share(did, [receiverWallet.address], [150])
  t.truthy(tx)

  const receiverInstance = await createStorageInstance(receiverWallet)

  const files = await receiverInstance.sharedFiles()
  t.is(files.length, 1)
  t.is(files[0].did, did.substring(2))
  t.is(files[0].size, file.size)
})

test.serial('Fail revoke transaction on unauthorized files', async (t) => {
  t.plan(3)
  const expected_errorCode = 'You dont have access to perform this operation'
  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .post('/api/v1/update-hash/')
    .reply(200, {
      err: expected_errorCode
    })
    .get('/api/v1/get-hash-data/')
    .query(true)
    .reply(200, null)

  const middleware = (req, res, next, end) => {
    switch (req.method) {
      case 'eth_call': {
        res.result = ethers.utils.defaultAbiCoder.encode(
          ['uint256', 'bool', 'bytes', 'address'],
          [
            ethers.BigNumber.from('120000'),
            true,
            ethers.utils.randomBytes(120),
            ethers.utils.id('random_address').substring(0, 42)
          ]
        )
        break
      }
    }
    end()
  }
  const receiverInstance = await createStorageInstance(receiverWallet, middleware)
  const err = (await t.throwsAsync(receiverInstance.files.revoke(did, arcanaWallet.address))) as CustomError
  t.true(err.message.endsWith(expected_errorCode))
  t.assert(err.code.startsWith('TRANSACTION'))
})

test.serial('Get consumed and total upload limit', async (t) => {
  const middleware = (req, res, next, end) => {
    const data = parseData({
      value: ethers.utils.parseEther('0'),
      data: req.params[0].data
    })
    switch (data.name) {
      case 'limit':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [100000000, 100000000])
        break
      case 'consumption':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [file.size, 0])
        break
      case 'defaultLimit':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [100000000, 100000000])
        break
    }
    end()
  }

  const arcanaInstance = await createStorageInstance(arcanaWallet, middleware)
  const Access = await arcanaInstance.getAccess()
  const [consumed, total] = await Access.getUploadLimit()
  t.is(consumed, file.size)
  t.is(total, 100000000)
})

test.serial('Get consumed and total download limit', async (t) => {
  const middleware = (req, res, next, end) => {
    const data = parseData({
      value: ethers.utils.parseEther('0'),
      data: req.params[0].data
    })
    switch (data.name) {
      case 'limit':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [100000000, 100000000])
        break
      case 'consumption':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [0, file.size])
        break
      case 'defaultLimit':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [100000000, 100000000])
        break
    }
    end()
  }

  const arcanaInstance = await createStorageInstance(arcanaWallet, middleware)
  const Access = await arcanaInstance.getAccess()
  const [consumed, total] = await Access.getDownloadLimit()
  t.is(consumed, file.size)
  t.is(total, 100000000)
})

test.serial('Revoke', async (t) => {
  meta_tx_nock(null)

  let middleware = (req, res, next, end) => {
    if (req.method == 'eth_call') {
      res.result = ethers.utils.defaultAbiCoder.encode(['address[]'], [[receiverWallet.address]])
    }
    end()
  }

  let arcanaInstance = await createStorageInstance(arcanaWallet, middleware)

  let access = await arcanaInstance.getAccess()
  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/shared-users/?did=' + did)
    .reply(200, [receiverWallet.address], { 'access-control-allow-headers': 'Authorization' })
    .post('/api/v1/update-hash/')
    .reply(200, {})
    .get('/api/v1/get-hash-data/')
    .query(true)
    .reply(200, null)

  const beforeRevokeUsers = await access.getSharedUsers(did)
  const tx = await access.revoke(did, receiverWallet.address)
  t.truthy(tx)

  middleware = (req, res, next, end) => {
    if (req.method == 'eth_call') {
      switch (true) {
        case req.params[0].data.startsWith('0x6184533f'):
          res.result = ethers.utils.defaultAbiCoder.encode(['address[]'], [[]])
          break
      }
    }
    end()
  };

  (arcanaInstance = await createStorageInstance(arcanaWallet, middleware)), (access = await arcanaInstance.getAccess())

  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/shared-users/?did=' + did)
    .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
  const afterRevokeUsers = await access.getSharedUsers(did)

  t.is(beforeRevokeUsers.includes(receiverWallet.address), true)
  t.is(afterRevokeUsers.includes(receiverWallet.address), false)
  t.is(beforeRevokeUsers.length - afterRevokeUsers.length, 1)

  await nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/shared-files/')
    .query(true)
    .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
    .get('/api/v1/files/shared/total/')
    .reply(200, { data: 0 })

  const receiverInstance = await createStorageInstance(receiverWallet)

  const files = await receiverInstance.sharedFiles()
  t.is(files.length, 0)
})

test.serial('Delete File', async (t) => {
  meta_tx_nock(null)

  const scope = nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/list-files/')
    .query(true)
    .reply(200, [{ did: did.substring(2) }], { 'access-control-allow-headers': 'Authorization' })
    .get('/api/v1/files/total/')
    .query(true)
    .reply(200, { data: 1 })

  const arcanaInstance = await createStorageInstance(arcanaWallet)

  const access = await arcanaInstance.getAccess()

  let files = await arcanaInstance.myFiles()

  t.is(files.length, 1)
  t.is(files[0].did, did.substring(2))

  const tx = await access.deleteFile(did)

  nock(gateway)
    .defaultReplyHeaders(nockOptions)
    .get('/api/v1/list-files/')
    .query(true)
    .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
    .get('/api/v1/files/total/')
    .query(true)
    .reply(200, { data: 0 })

  files = await arcanaInstance.myFiles()

  t.is(files.length, 0)
  t.truthy(tx)
})

test.serial('Grant app permission', async (t) => {
  meta_tx_nock(null)

  const middleware = (req, res, next, end) => {
    const data = parseData({
      value: ethers.utils.parseEther('0'),
      data: req.params[0].data
    })
    switch (data.name) {
      case 'appLevelControl':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint8'], [1])
        break
      case 'userAppPermission':
        res.result = ethers.utils.defaultAbiCoder.encode(['uint8'], [0])
    }
    end()
  }

  const arcanaInstance = await createStorageInstance(arcanaWallet, middleware)
  await t.notThrowsAsync(arcanaInstance.grantAppPermission())
})
