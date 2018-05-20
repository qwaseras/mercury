import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';

import {isLoggedIn, getUserNickname} from './common/utils/auth';

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
      exact path="/profile/:nickname"
      render={(props) => (isLoggedIn() ?
        <UserProfile {...props} /> :
        <Redirect to="/" />)}
    />
    <Route
      exact path="/profile"
      render={(props) => (isLoggedIn() ?
        <Redirect to={'/profile/' + getUserNickname()} /> :
        <Redirect to="/" />)}
    />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);
