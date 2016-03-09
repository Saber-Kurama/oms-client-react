'use strict';

const debug = require('debug');
const app = require('../../config');

const levels = {
  test: ['log', 'info', 'warn', 'error'],
  development: ['log', 'info', 'warn', 'error'],
  staging: ['info', 'warn', 'error'],
  production: ['warn', 'error']
};

if (app.argv.debug) {
  levels[app.environment].push('debug');
}

const loggers = [
  'app:bundle',
  'app:webpack',
  'app:server'
];

const envLevels = levels[app.environment];
envLevels.forEach(level =>
  loggers.forEach(logger =>
    debug.enable(`${logger}:${level}`)));
