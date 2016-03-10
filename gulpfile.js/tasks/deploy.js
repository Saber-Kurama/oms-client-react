// var gulp = require('gulp');
// var ghPages = require('gulp-gh-pages');
import path from 'path';
const wildcard = path.join(paths.dist, '**/*');
gulp.task('deploy', function() {
  return gulp.src(wildcard)
    .pipe($.ghPages());
});
