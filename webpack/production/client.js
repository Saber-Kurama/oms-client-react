import merge from 'webpack-merge';

import { sourceMap, paths } from '../../config';

import base from '../base/client';
import vendors from './vendors';
import loaders from './loaders/client';
import plugins from './plugins/client';
export default merge(base, {
  entry: {app: ['./client'], vendors },
  devtool: (process.env.SOURCR_MAP || sourceMap) && 'source-map',
  module: { loaders },
  plugins 
});
