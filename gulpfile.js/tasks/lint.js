/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/23.
 */
import path from 'path';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import eslintFormatter from 'eslint-friendly-formatter';

const wildcards = {
  styles: [
    path.join(paths.scripts, '**/*.css'),
    path.join(paths.styles, '**/*.css')
  ],
  scripts: {
    app: path.join(paths.scripts, '**/*.js'),
    test: path.join(paths.test, '**/*.js')
  }
};

gulp.task('lint:js', () => {
  const src = config.app.argv.test ?
      wildcards.scripts.test :
      wildcards.scripts.app;

  return gulp.src(src)
      .pipe($.eslint())
      .pipe($.eslint.format(eslintFormatter))
      .pipe($.eslint.failAfterError());
});

gulp.task('lint:js:fix', () => {
  const src = config.app.argv.test ?
      wildcards.scripts.test :
      wildcards.scripts.app;
  const dest = config.app.argv.test ?
      paths.test :
      paths.scripts;
console.log(paths);
  return gulp.src(src)
      .pipe($.eslint({
        fix: true
      }))
      .pipe($.eslint.format(eslintFormatter))
      .pipe($.eslint.failAfterError())
      .pipe(gulp.dest(dest));
});

gulp.task('lint:css', () => {
  const processors = [
    stylelint(config.app.postcss.stylelint),
    reporter({ clearMessages: true })
  ];

  return gulp.src(wildcards.styles)
      .pipe($.postcss(processors));
});

gulp.task('lint', () => sequence(['lint:js', 'lint:css']));