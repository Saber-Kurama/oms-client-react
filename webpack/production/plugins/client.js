import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { resolve, sourceMap } from '../../../config';
import common from './common';
const is = ext => s => s.endsWith(`.${ext}`);
const transformAssets = ({ assetsByChunkName: { app, vendors } }) => {
  console.log(vendors);
  Array.isArray(vendors) ? '' : vendors = [vendors];
  const assets = {
    scripts: [
      ...vendors.filter(is('js')),
      ...app.filter(is('js')),
    ],
    styles: [
      ...vendors.filter(is('css')),
      ...app.filter(is('css')),
    ]
  };
  return JSON.stringify(assets, null, 2);
}
export default [
  ...common,
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: process.env.SOURCE_MAP || sourceMap,
    minimize: true,
    compress: {
      screw_ie8: true,
      warnings: false,
      unsafe: true,
      drop_console: true
    }
  }),
  // new CompressionPlugin({
  //   asset: '{file}.gz',
  //   algorithm: 'gzip',
  //   regExp: /\.(js|css|html)$/,
  //   threshold: 8192,
  //   minRatio: 0.8
  // }),
  new StatsPlugin('../webpack.stats.json'),
  new StatsWriterPlugin({
    filename: 'assets.json',
    fields: null,
    transform: transformAssets
  })
];
