import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import createStore from '../store/create';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const store = createStore(history, initialState);
if (__DEVTOOLS__) {
  const { DebugPanel, DevTools, LogMonitor } = require('redux-devtools/lib/react');

  render(
    <div>
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    document.getElementById('content')
  );
} else {
  render(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
    ,
    document.getElementById('content')
  );
}
