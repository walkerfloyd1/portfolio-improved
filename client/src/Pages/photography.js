import React, { Component } from 'react';

import Footer from '../Components/Footer';

import Navbar from '../Components/Navbar';

import ControlledCarousel from '../Components/photoCarousel';

import Grid from '@material-ui/core/Grid';


export default class Photo extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <Grid item lg={9}><ControlledCarousel /></Grid>
                </Grid>
            <Footer />
        </div>
      );
    }
  }