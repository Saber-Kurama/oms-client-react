import { resolve } from '../../config';
import loaders from './loaders';
import plugins from './plugins';
import externals from './externals';

const noParse = [
  /node_modules\/sinon\//
];

const alias = {
  'test-utils': resolve.test('utils')
};

export default {
  module: { loaders, noParse },
  plugins,
  externals,
  resolve: { alias },
  devtool: 'inline-source-map',
  debug: true,
  cache: true,
}
