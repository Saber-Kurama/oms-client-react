
// import InitialState from './authInitialState';
//
// const {
//     SESSION_TOKEN_REQUEST
//     } = require('../../lib/constants').default;
// const initialState = new InitialState;
// 一个 用户的 reducer
export default function authReducer(state = {}, action) {

  switch (action.type) {
    case 'SESSION_TOKEN_REQUEST':
      let nextState = state;
      return nextState;
  }
  return state;
}
