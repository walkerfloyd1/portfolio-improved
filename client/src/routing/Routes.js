import React from 'react';
import { Route, Switch } from 'react-router';
import Alert from '../Components/Alert';
import PrivateRoute from './PrivateRoute';
import Portfolio from '../pages/portfolio';
import Profile from '../pages/about';
import Register from '../pages/register';
import Community from '../pages/community';
import Login from '../pages/login';
import Film from '../pages/filmmaking.js';
import Photo from '../pages/photography.js';
import UserProfile from '../Components/social/profile/UserProfile';
import CreateProfile from '../Components/social/profile-forms/CreateProfile';
import EditProfile from '../Components/social/profile-forms/EditProfile';

//temporarily turning off authentication to design pages

const Routes = props => {
    return (
        <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/portfolio" component={Portfolio} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/film" component={Film} />
          <PrivateRoute exact path="/photo" component={Photo} />
          <PrivateRoute exact path="/community" component={Community} />
          <PrivateRoute exact path="/my-profile" component={UserProfile} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        </Switch>
      </section>
    )
}

export default Routes;
