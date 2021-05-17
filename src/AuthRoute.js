import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth'

export const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !Auth.isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

export const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

