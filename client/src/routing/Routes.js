import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from '../Components/Alert';
import PrivateRoute from './PrivateRoute';
import Portfolio from '../webpages/portfolio';
import About from '../webpages/about';
import Film from '../webpages/filmmaking.js';
import Photo from '../webpages/photography.js';
import UserProfile from '../Components/social/profile/UserProfile';
import MyProfile from '../webpages/MyProfile';
import CreateProfile from '../Components/social/profile-forms/CreateProfile';
import EditProfile from '../Components/social/profile-forms/EditProfile';
import Posts from '../webpages/Posts';
import Post from '../Components/social/post/Post';

import { Provider } from 'react-redux';

import { loadUser } from '../Components/social/redux/auth';

import setAuthToken from '../utils/setAuthToken';

import store from '../store';

import '../App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const Routes = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
    return (
      <Provider store={store}>
      <Router>
        <Fragment>
        <Switch>
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/profile/:id" component={UserProfile} />
          <PrivateRoute exact path="/portfolio" component={Portfolio} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <Route exact path="/film" component={Film} />
          <Route exact path="/photo" component={Photo} />
          <PrivateRoute exact path="/my-profile" component={MyProfile} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        </Switch>
        </Fragment>
      </Router>
      </Provider>
    )
}

export default Routes;
