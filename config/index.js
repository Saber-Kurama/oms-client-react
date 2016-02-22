import { name, description } from '../package';

// import server from './server';
import paths from './paths';
// import resolve from './resolve';
import aliases from './aliases';
// import dependencies from './dependencies';
// import globals from './globals';
// import browsersync from './browsersync';
// import postcss from './postcss';
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
  // resolve,
  aliases,
  // dependencies,
  // globals: globals(environments, environmentName, argv),
  //
  // postcss,
  // browsersync: browsersync(argv),
  //
  env: environments,
  environment: environmentName,

}
