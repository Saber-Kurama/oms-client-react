import del from 'del';

gulp.task('clean:dist', () => del(['dist/*']));
gulp.task('clean:coverage', () => del(['coverage/*']));

gulp.task('clean', () => sequence(['clean:dist', 'clean:coverage']));
