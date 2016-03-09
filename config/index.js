import { name, description } from '../package';

// import server from './server';
// 所有的路径
import paths from './paths';
// 路径转换
import resolve from './resolve';
// 别名
import aliases from './aliases';
// import dependencies from './dependencies';
// import globals from './globals';
// import browsersync from './browsersync';
import postcss from './postcss';
// 当前环境
import env from './env';
//
import parseArgs from './utils/parseArgs';
//
const argv = parseArgs();
const { environments, environmentName } = env(argv);

export default {
  argv,

  name,
  description,
  // server,
  //
  paths,
  resolve,
  aliases,
  // dependencies,
  // globals: globals(environments, environmentName, argv),
  //
  postcss,
  // browsersync: browsersync(argv),
  //
  env: environments,
  environment: environmentName,

}
