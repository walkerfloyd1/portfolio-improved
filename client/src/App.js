import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';

import Portfolio from './pages/portfolio';

import Profile from './pages/profile';

import Register from './pages/register';

import Login from './pages/login';

import Home from './pages/home';

import Film from './pages/filmmaking.js';

import Photo from './pages/photography.js';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/film" component={Film} />
      <Route exact path="/photo" component={Photo} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
    </Router>
  );
}

export default App;
