import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import global from './global/reducer';

export default combineReducers({
  global,
  router: routeReducer
});
