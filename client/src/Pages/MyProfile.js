import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import Dashboard from '../Components/social/dashboard/Dashboard';

import Footer from '../Components/Footer';

export default class MyProfile extends Component {
    render() {
      return (
        <div>
          <Navbar />
            <Dashboard />
          <Footer />
        </div>
      );
    }
  }

