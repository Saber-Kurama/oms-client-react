import { compose } from 'redux';

const createDevTools = () => {
  return __DEVTOOLS__ && !window.devToolsExtension ?
    require('components/dev_tools').instrument() :
    window.devToolsExtension && window.devToolsExtension();
};

export default (middleware) => {
  if (__CLIENT__ && __DEVELOPMENT__ && (__DEVTOOLS__ || window.devToolsExtension)) {
    return compose(middleware, createDevTools());
  }
  return compose(middleware);
};
