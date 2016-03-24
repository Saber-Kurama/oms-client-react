/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/3/24.
 */
import  { Server } from 'karma';

const karmaTask = (done) => {
  new Server({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, (exitStatus) => {
    if (exitStatus) {
      throw new Error('There are failing unit tests');
    }else {
      done();
    }
  }).start();
};

gulp.task('testRunner', karmaTask);

gulp.task('testComplate', () => {
  console.log('Test Succsess.'.bold.bgRed);
  console.log('Test Succsess.'.bold.bgWhite);
  console.log('Test Succsess.'.bold.bgBlue);
  process.exit();
});

gulp.task('test', () => sequence(
    'testRunner',
    'testComplate'
));