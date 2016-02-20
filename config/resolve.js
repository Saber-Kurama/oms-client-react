/*
 * 路径的转换
 */
 import path from 'path';
 import mapObj from 'map-obj';
 import dirs from './dirs';

 const resolve = path.resolve;
// 项目根路径
 const base = [resolve(__dirname, '..')];
 const root = (...args) => resolve.apply(resolve, [...base, ...args]);
 const entries = mapObj(dirs, (k, v) => [k, root.bind(null, v)]);

 export default { root, ...entries };
