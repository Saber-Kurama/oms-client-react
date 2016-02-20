import mapObj from 'map-obj';
import resolve from './resolve';

const rootSiblings = mapObj(resolve, (k, v) => [k, v('')]);

export default {
  ...rootSiblings, // root, (bin, src, dist)(dirs 中的)

  public: resolve.dist('public'),

  scripts: resolve.src('scripts'),
  styles: resolve.src('styles'),
  templates: resolve.src('templates'),

  // 资产的路径
  assets: {
    root: resolve.src('assets'),
    fonts: resolve.src('assets/fonts'),
    icons: resolve.src('assets/icons'),
    images: resolve.src('assets/images')
  },

  // lcov: resolve.coverage('*/lcov.info'),
  // eslintrc: resolve.root('.eslintrc'),
  // stylelintConfig: resolve.root('stylelint.config.js'),
  // karmaConfig: resolve.root('karma.conf.js'),
}
