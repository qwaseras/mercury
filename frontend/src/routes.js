import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import {isLoggedIn} from './common/utils/auth';

export default ({dispatch, getState}) => (
  <Switch>
    <Route
      exact path="/"
      render={(props) => <Home {...props} />}
    />
    <Route
      exact path="/about"
      render={(props) => <About {...props} />}
    />
    <Route
      exact path="/dashboard"
      render={(props) => (isLoggedIn() ?
        <Dashboard {...props} /> :
        <Redirect to="/signin" />)}
    />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);
