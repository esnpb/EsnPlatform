// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// react and redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// layouts
import MainLayout from './layouts/MainLayout';
// containers - pages
import Dashboard from './containers/Dashboard';
import Tables from './containers/Tables';
import Charts from './containers/Charts';
import NotFound from './containers/NotFound';
// Redux store
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Dashboard} />
        <Route path="tables" component={Tables} />
        <Route path="charts" component={Charts} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  app);
