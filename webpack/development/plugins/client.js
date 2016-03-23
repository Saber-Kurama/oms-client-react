import webpack from 'webpack';
import path from 'path';
import config from '../../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default [
  new HtmlWebpackPlugin({
    template: path.join(config.paths.src, 'index.html.tpl'),
    filename: 'index.html',
    inject: 'body'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];
