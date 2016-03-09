import forever, {Monitor} from 'forever-monitor'; // 守护进程

const { paths } = config.app;
// 忽略文件
const watchIgnorePatterns = [
  '*.css',
  '*.txt',
  '*.xml',
  '*.json'
];
export default (name, filename, options = {} ) => {
  const { debug, info, warn, error } = logger(`app:${name}`);
  debug(`creating monitor to watch for ${name}: ${filename}...`);
  const monitor = new Monitor(filename, {
    max: 3,
    watchDirectory: paths.dist,
    watchIgnorePatterns,
    silent: true,
    ...options
  });

  monitor.on('exit', _ => info(`🚷 🚷 🚷  fuck this shit, giving up after ${monitor.times} restarts, ${name} has exited`));
  monitor.on('exit:code', (code) => warn(`🚧  forever detected ${name} exited with code ${code}`));

  monitor.on('restart', _ => info(`🛠  restarting ${name} #${monitor.times}`));
  monitor.on('watch:restart', ({ file }) => info(`🛠  restarting ${name} because of: ${file}`));

  monitor.on('stdout', data => info(data.toString()));
  monitor.on('stderr', data => error(data.toString()));
  monitor.on('error', err => error(err));

  return monitor.start();
}
