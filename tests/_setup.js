const browserEnv = require('browser-env');
browserEnv();
const { Crypto } = require('@peculiar/webcrypto');
const crypto = new Crypto();
require('mock-local-storage');
require('whatwg-fetch');
require('indexeddbshim')(window, { checkOrigin: false });
window.crypto = global.crypto = crypto;
window.URL.createObjectURL = () => {};