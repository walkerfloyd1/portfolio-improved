import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';

import Portfolio from './pages/portfolio';

import Profile from './pages/profile';

import Register from './pages/register';

import Community from './pages/community';

import Login from './pages/login';

import Film from './pages/filmmaking.js';

import Photo from './pages/photography.js';

import AccountInfo from './pages/accountinfo';

import Landing from './pages/Landing';

import PrivateRoute from './routing/PrivateRoute';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/portfolio" component={Portfolio} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/film" component={Film} />
      <PrivateRoute exact path="/photo" component={Photo} />
      <PrivateRoute exact path="/community" component={Community} />
      <PrivateRoute exact path="/info" component={AccountInfo} />
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
