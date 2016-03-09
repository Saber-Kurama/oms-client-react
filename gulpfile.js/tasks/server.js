import monitor from '../utils/monitor';

const { watch, lint } = config.app.argv;
gulp.task('server', () => monitor('server', resolve.root('scripts/server.js'), {
  watch,
  args: lint ? ['--lint'] : [],
  killTree: true
}));
