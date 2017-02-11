import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// react and redux
import React from 'react';
import ReactDOM from 'react-dom';
// router
import routes from './routes';
// Redux store
import store from './store';
// bundled styles
import '../theme/vendor/bootstrap/css/bootstrap.min.css';
import '../theme/dist/css/sb-admin-2.css';
import '../theme/vendor/font-awesome/css/font-awesome.min.css';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//bundled images
import '../favicon.ico';// 

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  app);
