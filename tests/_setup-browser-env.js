const browserEnv = require('browser-env');
browserEnv();
require( 'mock-local-storage')

window.localStorage = global.localStorage
