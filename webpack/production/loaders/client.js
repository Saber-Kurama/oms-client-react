import ExtractTextPlugin from 'extract-text-webpack-plugin';
import paths from '../../../config/paths';
import { cssOptions } from '../../utils';
const extractOptions = {
  allChunks: true
};
export default [
  {
    test: /\.css$/,
    include: [paths.modules],
    loader: ExtractTextPlugin.extract(
        `css?importLoaders=1&minimize!postcss`,
        extractOptions
    )
  },
  {
    test: /\.css$/,
    include: [paths.styles, paths.scripts],
    loader: ExtractTextPlugin.extract(
        `css?minimize&${cssOptions.css}!postcss`,
        extractOptions
    )
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(
        `css?minimize!sass?includePath[]=${paths.modules}`,
        extractOptions
    )
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loader: ExtractTextPlugin.extract(
        `css?minimize&${cssOptions.sass}!sass?includePath[]=${paths.modules}!toolbox`,
        extractOptions
    )
  },
  {
    test: /\.sass$/,
    loader: ExtractTextPlugin.extract(
        `css?minimize!sass?includePath[]=${paths.modules}&indentedSyntax`,
        extractOptions
    )
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
        'css!less',
        extractOptions
    )
  },
  {
    test: /\.jsx?$/,
    loader: 'babel',
    // exclude: /node_modules/,
    include: [
      /node_modules\/qs/,
      paths.scripts
    ]
  }
];
