const { verbose } = config.app.argv;

export default {
  colors: $.util.colors.supportsColor,
  hash: verbose,
  version: verbose,
  timings: verbose,
  chunks: verbose,
  chunkModules: verbose,
  cached: verbose,
  cachedAssets: verbose,
  modules: verbose,
  assets: true,
  errorDetails: true,
  children: false
}
