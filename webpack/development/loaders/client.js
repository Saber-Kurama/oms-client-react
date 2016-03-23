import paths from '../../../config/paths';
import { cssOptions } from '../../utils';
export default [
  {
    test: /\.css$/,
    include: [paths.modules],
    loaders: [
      'style',
      'css?importLoaders=1',
      'postcss'
    ]
  },
  {
    test: /\.css$/,
    include: [
      paths.styles,
      paths.scripts
    ],
    loaders: [
      'style',
      `css?sourceMap&${cssOptions.css}`,
      // `css?${cssOptions.css}`,
      'postcss'
    ]
  },
  // {
  //   test: /\.scss$/,
  //   exclude: /node_modules\/react-toolbox\/lib/,
  //   loaders: [
  //     'style',
  //     'css',
  //     `sass?includePath[]=${paths.modules}`
  //   ],
  // },
  // {
  //   test: /\.scss$/,
  //   include: /node_modules\/react-toolbox\/lib/,
  //   loaders: [
  //     'style',
  //     `css?${cssOptions.sass}`,
  //     `sass?includePath[]=${paths.modules}`,
  //     'toolbox'
  //   ]
  // },
  {
    test: /\.sass$/,
    include: [paths.modules],
    loaders: [
      'style',
      'css',
      `sass?includePath[]=${paths.modules}&indentedSyntax`
    ]
  },
  {
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      'autoprefixer?browsers=last 2 version',
      'less-loader?{"sourceMap":true,"modifyVars":{"primary-color": "#ff6f00", "link-color": "#ff6f00"}}' // 调整antd的主题颜色
    ]
  },
  {
    test: /\.jsx?$/,
    loader: 'babel',
    include: [
      /node_modules\/qs/,
      paths.scripts
    ],
    query: {
      presets: [
        'es2015',
        'stage-0',
        'react',
        'react-hmre'
      ],
      plugins: [
        'transform-runtime',
        'typecheck',
        'transform-decorators-legacy', // 支持装饰器
        'add-module-exports',
        'react-require'
      ]
    }
  }
];
