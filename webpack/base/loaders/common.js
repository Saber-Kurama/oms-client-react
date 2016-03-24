import paths from '../../../config/paths';
import { addHash } from '../../utils';

const name = addHash('[path][name].[ext]', 'hash:10');
const fontname = addHash('fonts/[name].[ext]', 'hash:10');
const imagename = addHash('images/[name].[ext]', 'hash:10');
const limit = 10000;

const loader = {
  font: {
    file: {
      loader: 'file',
      include: [
        paths.modules,
        paths.assets.fonts
      ]
    },
    url: {
      loader: 'url',
      include: [
        paths.modules,
        paths.assets.fonts
      ]
    }
  },
  image: { url: { loader: 'url', include: [paths.assets.images] } }
};

const query = {
  font: {
    file: { prefix: 'fonts/', name: fontname },
    url: { prefix: 'fonts/', name: fontname, limit }
  },
  image: { url: { prefix: 'images/', name: imagename, limit } }
};
/*
 *  主要是静态资源的 加载器
 */
export default [
  { test: /\.json(\?.+)?$/, loader: 'json' },
  { test: /\.(jpe?g|png|gif)(\?.+)?$/i, query: query.image.url, ...loader.image.url },
  { test: /\.woff(\?.+)?$/, query: { mimetype: 'application/font-woff', ...query.font.url }, ...loader.font.url },
  { test: /\.woff2(\?.+)?$/, query: { mimetype: 'application/font-woff2', ...query.font.url }, ...loader.font.url },
  { test: /\.ttf(\?.+)?$/, query: { mimetype: 'application/octet-stream', ...query.font.url }, ...loader.font.url },
  { test: /\.eot(\?.+)?$/, query: query.font, ...loader.font.file },
  { test: /\.svg(\?.+)?$/, include: [paths.modules, paths.scripts], loader: 'url-loader' }
];
