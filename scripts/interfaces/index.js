import path from 'path';
import fs from 'fs';

let interfaces = [];
const normalizedPath = path.join(__dirname, '/');
fs.readdirSync(normalizedPath).forEach(
  (file) => {
    if (fs.statSync(normalizedPath + file).isDirectory()) {
      const appinterface = require(`./${file}`);
      interfaces = interfaces.concat(appinterface.interfaces);
    }
  }
);
export default {
  title: '当前项目的所有接口',
  version: '0.0.1',
  status: 'mock', // ['mock','proxy']
  rulebase: 'interfaces',
  proxy: '',
  interfaces
};
