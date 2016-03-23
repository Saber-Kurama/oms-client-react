import { paths, postcss, argv } from '../../config';

const {
  cssnext,
  assets,
  // fontMagician
} = postcss;

const reporters = () => [
  require('postcss-reporter'),
  require('postcss-browser-reporter')
];

export default (bundler) => [
  require('postcss-import')({
    addDependencyTo: bundler,
    path: [
      paths.modules,
      paths.styles
    ]
  }),
  require('postcss-custom-media'),
  require('precss'),
  require('postcss-cssnext')(cssnext),
  // require('lost'),
  //require('postcss-assets')(assets),
  // require('postcss-font-magician')(fontMagician),
  require('postcss-size'),
  require('postcss-focus'),
  require('postcss-position'),
  require('postcss-easings'),
  require('postcss-brand-colors'),
  require('postcss-hexrgba'),
  require('postcss-color-rgba-fallback'),
  require('postcss-input-style'),
  require('postcss-quantity-queries'),
  require('postcss-responsive-type')({
    minSize: '1rem',
    maxSize: '2rem',
    minWidth: '22.5rem',
    maxWidth: '85.375rem',
    rootSize: '1rem'
  }),

  ...(argv.production ? require('cssnano') : []),
  ...(argv.lint ? reporters() : [])
];
