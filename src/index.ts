(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';
import { Access } from './Access';
import * as utils from './Utils';

export { Uploader, Downloader, Access, utils };
