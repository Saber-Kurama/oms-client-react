import displayOptions from './displayOptions.js';

export default (err, stats) => {
  if (err) throw new $.util.PluginError('webpack', err, { showStack: true });
  $.util.log('[webpack]\n', stats.toString(displayOptions));
};
