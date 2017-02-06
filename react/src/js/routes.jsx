import React from 'react';
import { Route, IndexRoute } from 'react-router';
// layouts
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
// containers - pages
import Dashboard from './containers/Dashboard';
import Tables from './containers/Tables';
import UsersList from './containers/UsersList';
import Charts from './containers/Charts';
import LoginContainer from './containers/Login';
import NotFound from './containers/NotFound';

export default [
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Dashboard} />
    <Route path="tables" component={Tables} />
    <Route path="charts" component={Charts} />
    <Route path="users" component={UsersList} />
  </Route>,
  <Route path="/" component={EmptyLayout}>
    <Route path="login" component={LoginContainer} />
  </Route>,
  <Route path="*" component={NotFound} />,
];
