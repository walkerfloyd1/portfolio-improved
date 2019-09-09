import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import UserProfile from '../Components/social/profile/UserProfile';



export default class MyProfile extends Component {
    render() {
      return (
        <div>
          <Navbar />
            <UserProfile />
        </div>
      );
    }
  }

