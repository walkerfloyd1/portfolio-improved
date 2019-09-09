import React, { Component } from 'react';

import Photos from '../Components/Photos';

import Footer from '../Components/Footer';

import Navbar from '../Components/Navbar';

export default class Photo extends Component {
    render() {
      return (
        <div>
          <Navbar />
              <Photos />
            <Footer />
        </div>
      );
    }
  }