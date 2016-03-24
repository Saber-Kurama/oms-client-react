//gulp.task('default', () => sequence(
//    'clean:dist',
//    'assets',
//    'server'            // start server
//));
//gulp.task('dev', () => sequence(
//    'assets'
//));
gulp.task('production', () => sequence(
    'clean:dist',
    'lint',
    'bundle:client'
));
