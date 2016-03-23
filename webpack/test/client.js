import merge from 'webpack-merge';

import base from '../base/client';
import common from './common';

export default merge(base, common, {
});

