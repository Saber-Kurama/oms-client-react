/**
 * 中间件
 */
 import thunk from 'redux-thunk';
 import promise from 'redux-promise';
 import { applyMiddleware } from 'redux';

// 自定义的两个中间件
 // import api from './custom/api';
 // import delay from './custom/delay';

 function getEnvMiddleware() {
   if (__DEVELOPMENT__ || __TEST__) {
     return require('./development');
   } else {
     return require('./production');
   }
 }

// 加载中间件 （只能调用以此）
 export function setup(router) {
   const env = getEnvMiddleware();

   return applyMiddleware(
     router,
     thunk,
    //  promise,
    //  api,
     ...env
   );
 }
