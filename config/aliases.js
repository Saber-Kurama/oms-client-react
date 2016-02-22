/**
 *  aliases 别名 简化路径查找
 */
import fs from 'fs';

import resolve from './resolve';
import paths from './paths';
// import dependencies from './dependencies';

const scripts = fs.readdirSync(paths.scripts)
  .filter((entry) => fs.statSync(resolve.src('scripts', entry)).isDirectory())
  .reduce((acc, dir) => ((acc[dir] = resolve.src('scripts', dir)) && acc), {});

export default {
  styles: paths.styles,
  templates: paths.templates,

  fonts: paths.assets.fonts,
  icons: paths.assets.icons,
  images: paths.assets.images,

  'sinon': 'sinon/pkg/sinon',

  ...scripts,
  // ...dependencies
}
