import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// react and redux
import React from 'react';
import ReactDOM from 'react-dom';
// router
import routes from './routes';
// Redux store
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  app);
