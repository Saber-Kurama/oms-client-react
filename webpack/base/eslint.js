import formatter from 'eslint-friendly-formatter';
import { eslintrc } from '../../config/paths';

export default {
  configFile: eslintrc,
  formatter,
  emitWarning: true,
  failOnError: false,
  failOnWarning: false
};
