gulp.task('default', () => sequence(
  'clean:dist',
  'assets',
  'server'            // start server

));
gulp.task('dev', () => sequence(
  'assets'
));
