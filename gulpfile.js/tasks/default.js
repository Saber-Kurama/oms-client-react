gulp.task('default', () => sequence(
  'assets',

  'server'            // start server

));
gulp.task('dev', () => sequence(
  'assets'
));
