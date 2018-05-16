import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';

import {isLoggedIn} from './common/utils/auth';

export default ({dispatch, getState}) => (
  <Switch>
    <Route
      exact path="/"
      render={(props) => (isLoggedIn() ?
        <Home {...props} /> :
        <Redirect to="/signin" />)}
    />
    <Route
      exact path="/dashboard"
      render={(props) => (isLoggedIn() ?
        <Dashboard {...props} /> :
        <Redirect to="/signin" />)}
    />
    <Route exact path="/signin" component={Signin} />
  </Switch>
);
