'use strict';

// require('dotenv').load();

require('./logging.js');
require('./globals.js');
require('require-dir')('../tasks', { recurse: true });
