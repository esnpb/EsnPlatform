// react and redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// layouts
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
// containers - pages
import Dashboard from './containers/Dashboard';
import Tables from './containers/Tables';
import Charts from './containers/Charts';
import SignIn from './containers/SignIn';
import NotFound from './containers/NotFound';
// Redux store
import store from './store';
// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute path="/" component={Dashboard} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
    </Route>
    <Route path="*" component={NotFound}/>
    </Router>
  </Provider>,
  app);
