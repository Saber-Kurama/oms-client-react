import webpack from 'webpack';
// import AppCachePlugin from 'appcache-webpack-plugin';
import { globals, environment } from '../../../config';
import common from './common';

export default [
  ...common,
  new webpack.DefinePlugin({
    ...globals,
    'process.env': {
      NODE_ENV: JSON.stringify(environment),
    },
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
    __CLIENT__: true,
    __SERVER__: false
  }),

  // TODO: learn & setup correctly, disabled for now
  //
  // new AppCachePlugin({
  //   exclude: [
  //     'main.js',
  //     /.+\.map$/,
  //     /.+\.serviceworker\.js$/
  //   ]
  // })
]
