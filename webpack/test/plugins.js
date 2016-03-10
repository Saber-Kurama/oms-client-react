import webpack from 'webpack';
import { globals } from '../../config';

export default [
  new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
  new webpack.NoErrorsPlugin()
]
