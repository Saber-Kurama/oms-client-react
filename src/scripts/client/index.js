/**
 *  项目的入口
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
// import { ReduxRouter } from 'redux-router';
import createRoutes from 'routes';
// 创建数据 store
import createStore from '../store/create';
import injectTapEventPlugin from 'react-tap-event-plugin';
// 引入 antd的less样式
import 'antd/style/index.less';
import '../../styles/code.css';
// import './index.less';
injectTapEventPlugin();
const initialState = {};
const store = createStore(browserHistory, initialState);
const history = useRouterHistory(createHistory)({ basename: '' });
// if (__DEVTOOLS__) {
//   const { DebugPanel, DevTools, LogMonitor } = require('redux-devtools/lib/react');
//   render(
//     <div>
//       <Provider store={store}>
//         <ReduxRouter />
//       </Provider>
//       <DebugPanel top right bottom>
//         <DevTools store={store} monitor={LogMonitor} />
//       </DebugPanel>
//     </div>,
//     document.getElementById('content')
//   );
// } else {
//   render(
//     <Provider store={store}>
//       <ReduxRouter />
//     </Provider>
//     ,
//     document.getElementById('content')
//   );
// }

render(
  <Provider store={store}>
  <Router history={history}>
    {createRoutes(store)}
  </Router>
</Provider>
  ,
  document.getElementById('content')
);
