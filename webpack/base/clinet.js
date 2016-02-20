import merge from 'webpack-merge';

import config from '../../config';
import { addHash } from '../utils';
import common from './common';
import loaders from './loaders/client';
import plugins from './plugins/client';

export default merge(common, {
  target: 'web',
  entry: ['./client'],
  output: {
    path: config.paths.public,

    filename: addHash('[name].js', 'chunkhash'),
    chunkFilename: addHash('chunk.[name].js', 'chunkhash'),

    library: 'ClientApp',
    libraryTarget: 'var'
  },
  module: { loaders },
  plugins
});
