gulp.task('default', () => sequence(
    'clean:dist',
    'assets',
    'server'            // start server
));
gulp.task('dev', () => sequence(
    'clean:dist',
    'assets',
    'nodemon'
));
gulp.task('dev:lint', () => sequence(
    'clean:dist',
    'assets',
    'nodemon:lint'
));
gulp.task('production', () => sequence(
    'clean:dist',
    //'lint:js',
    'bundle:client'
));
