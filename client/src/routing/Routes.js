import React from 'react';
import { Route, Switch } from 'react-router';
import Alert from '../Components/Alert';
import PrivateRoute from './PrivateRoute';
import Portfolio from '../pages/portfolio';
import About from '../pages/about';
import Register from '../pages/register';
import Community from '../pages/community';
import Login from '../pages/login';
import Film from '../pages/filmmaking.js';
import Photo from '../pages/photography.js';
import UserProfile from '../Components/social/profile/UserProfile';
import CreateProfile from '../Components/social/profile-forms/CreateProfile';
import EditProfile from '../Components/social/profile-forms/EditProfile';
import Profiles from '../Components/social/profiles/Profiles';
import Posts from '../Components/social/posts/Posts';


const Routes = props => {
    return (
        <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profiles" component={Profiles} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/profile/:id" component={UserProfile} />
          <PrivateRoute exact path="/portfolio" component={Portfolio} />
          <PrivateRoute exact path="/posts" component={Posts} />
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
