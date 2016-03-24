import path from 'path';
import config from '../../../config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { addHash } from '../../utils';

export default [
  new HtmlWebpackPlugin({
  template: path.join(config.paths.src, 'index.html.tpl'),
  filename : 'index.html',
  inject: 'body'
  }),
  new ExtractTextPlugin(addHash('css/[name].css', 'contentHash')),
];
