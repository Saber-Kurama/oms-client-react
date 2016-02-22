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
      `css?${cssOptions.css}`,
      'postcss'
    ]
  },
  {
    test: /\.scss$/,
    exclude: /node_modules\/react-toolbox\/lib/,
    loaders: [
      'style',
      'css',
      `sass?includePath[]=${paths.modules}`
    ],
  },
  {
    test: /\.scss$/,
    include: /node_modules\/react-toolbox\/lib/,
    loaders: [
      'style',
      `css?${cssOptions.sass}`,
      `sass?includePath[]=${paths.modules}`,
      'toolbox'
    ]
  },
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
        'transform-decorators-legacy',
        'add-module-exports',
        'react-require'
      ]
    }
  }
]
