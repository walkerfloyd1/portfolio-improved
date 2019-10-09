import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';

import Register from './webpages/register';

import Login from './webpages/login';

import About from './webpages/about';

import Landing from './webpages/Landing';

import Routes from './routing/Routes';

import { loadUser } from './Components/social/redux/auth';

import setAuthToken from './utils/setAuthToken';

import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={About} />
        <Route exact path="/landing" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
