import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';

import Landing from './pages/Landing';

import PrivateRoute from './routing/PrivateRoute';

import Routes from './routing/Routes';

import Navbar from './Components/Navbar';

import { loadUser } from './redux/auth';

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
        <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
