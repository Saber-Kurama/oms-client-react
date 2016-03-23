import { paths, argv } from '../../config';

const eslint = {
  test: /\.jsx?$/,
  include: [paths.scripts],
  loader: 'eslint'
};

export default argv.lint ?
  [eslint] :
  [];
