import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';

import Portfolio from './Pages/Portfolio';

import Profile from './Pages/Profile';

import Home from './Pages/Home';

import Film from './Pages/filmmaking.js';

import Photo from './Pages/photography.js';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/film" component={Film} />
      <Route exact path="/photo" component={Photo} />
      <Route exact path="/" component={Home} />
    </Switch>
    </Router>
  );
}

export default App;
