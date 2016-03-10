'use strict';

require('babel-core/register');
require('babel-polyfill');

var karmaConfig = require('./karma');

module.exports = function(config) {
  config.set(karmaConfig)
};
