import { paths, argv } from '../../config';

const eslint = {
  test: /\.jsx?$/,
  include: [paths.scripts],
  loader: 'eslint'
};
console.log('argv ===========' + argv.lint)
export default argv.lint ?
  [eslint] :
  [];
