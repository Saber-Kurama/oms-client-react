import paths from '../../config/paths';
import { cssOptions } from '../utils';

export default [
  {
    test: /\.jsx?$/,
    include: [
      /node_modules\/qs/,
      paths.scripts,
      paths.test
    ],
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loaders: ['style', `css?${cssOptions.css}`, 'postcss']
  },
  {
          test    : /\.less$/,
          loaders : [
            'style-loader',
            'css-loader',
            'postcss',
            //'autoprefixer?browsers=last 2 version',
            'less-loader?{"sourceMap":true,"modifyVars":{"primary-color": "#ff6f00", "link-color": "#ff6f00"}}' // 调整antd的主题颜色
          ]
        },
  {
    test: /\.scss$/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}`],
  },
  {
    test: /\.sass$/,
    loaders: ['style', `css?${cssOptions.sass}`, `sass?includePath[]=${paths.modules}&indentedSyntax`],
  }
]
