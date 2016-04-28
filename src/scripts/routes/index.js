import { Route, IndexRoute } from 'react-router';

// import setup from './utils/setup';
import * as layouts from 'layouts';
import { Home, About } from 'pages';
//
// import adminRoutes from './admin';
// import appRoutes from './app';
const routes = (
  <Route>
    <Route path="/" component={layouts.app} >
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Route>
);

// export default store => setup(store, routes);
export default function (store) {
  return routes;
}
