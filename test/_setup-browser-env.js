const browserEnv = require('browser-env');
browserEnv();
const { Crypto } = require("@peculiar/webcrypto");
const crypto = new Crypto();
require('mock-local-storage')


window.crypto = global.crypto = crypto;
