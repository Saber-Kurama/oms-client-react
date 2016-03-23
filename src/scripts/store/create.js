/**
 * 创建数据 store
 */
import { createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// 中间件
import { setup } from './middleware';
import enhance from './enhance';
import reducers from 'modules';

// 根据 history（hash 浏览器 等不同类型 ） 和 初始值来创建 store
export default function (history, initialState = {}) {
  // 创建一个中间件
  const routerMiddleware1 = routerMiddleware(history);
  const middleware = setup(routerMiddleware1);
  //
  const creator = enhance(middleware);
  const create = creator(createStore);
  const store = create(reducers, initialState);

  // if (__DEVELOPMENT__ && __DEVTOOLS__) {
  //   routerMiddleware.listenForReplays(store)
  // }
  //
  // if (__DEVELOPMENT__ && module.hot) {
  //   module.hot.accept('modules', () => {
  //     const reducers = require('modules');
  //     store.replaceReducer(reducers);
  //   });
  // }

  return store;
}
