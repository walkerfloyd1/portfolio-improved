import React from 'react';
import { Route, Switch } from 'react-router';
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


import '../App.css';


const Routes = props => {
    return (
        <section className="container">
        <Alert />
        <Switch>
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/profile/:id" component={UserProfile} />
          <PrivateRoute exact path="/portfolio" component={Portfolio} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <PrivateRoute exact path="/film" component={Film} />
          <PrivateRoute exact path="/photo" component={Photo} />
          <PrivateRoute exact path="/my-profile" component={MyProfile} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        </Switch>
      </section>
    )
}

export default Routes;
