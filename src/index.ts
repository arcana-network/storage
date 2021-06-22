(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

import { Uploader } from './Uploader';
import { Downloader } from './Downloader';

export { Uploader, Downloader };