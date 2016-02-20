import path from 'path';

const { verbose, watch, profile } = config.app.argv;
const wildcard = path.join(paths.assets.root, '**/*');
const copy = () =>
  gulp.src(wildcard)
    .pipe($.changed(paths.public))
    .pipe(profile ? $.debug({ title: 'assets' }) : $.util.noop())
    .pipe(verbose || profile ? $.size({ title: 'assets' }) : $.util.noop())
    .pipe(gulp.dest(paths.public));

gulp.task('assets:copy', copy);
gulp.task('assets', () => copy() && watch && gulp.watch(wildcard, copy));
