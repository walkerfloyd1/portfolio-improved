import React, { Component } from 'react'

import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import Footer from '../Components/Footer';

import '../styles/Home.css';

import Button from '@material-ui/core/Button';

import Box from '../Components/box';

class Home extends Component {
    constructor() {
        super()
        this.routeProfile = this.routeProfile.bind(this);
        this.routePortfolio = this.routePortfolio.bind(this);
        this.routeFilm = this.routeFilm.bind(this);
        this.routePhotography = this.routePhotography.bind(this);
    }
    routeProfile() {
        let path= '/profile';
        this.props.history.push(path);
    }

    routePortfolio() {
        let path= '/portfolio'
        this.props.history.push(path);
    }
    routeFilm() {
        let path= '/film'
        this.props.history.push(path);
    }
    routePhotography() {
        let path= '/photo'
        this.props.history.push(path);
    }

    render() {
        return (
        <div>
            <Grid
            container
  spacing={3}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}>
      <Grid item lg={6}>
            
                <h1 >WALKER FLOYD</h1>
    </Grid>
    <Grid item lg={6}>
                <Button
                        color="text.primary"
                        style={{
                            width: '100%',
                            textAlign: "center",
                            justifyContent: "center",
                            fontFamily: "Raleway, sans-serif",
                            fontSize: "20px",
                        }}
                    
                            onClick={this.routeProfile}
                        >Profile</Button>
                <Button 
                            style={{
                                width: '100%',
                                textAlign: "center",
                                justifyContent: "center",
                                fontFamily: "Raleway, sans-serif",
                                fontSize: "20px",
                            }}
                            onClick={this.routePortfolio}
                >Coding</Button>
                <Button
                        color="text.primary"
                        style={{
                            width: '100%',
                            textAlign: "center",
                            justifyContent: "center",
                            fontFamily: "Raleway, sans-serif",
                            fontSize: "20px",
                        }}
                    
                            onClick={this.routeFilm}
                        >Film</Button>
                <Button
                    color="text.primary"
                    style={{
                        width: '100%',
                        fontSize: "20px",
                        textAlign: "center",
                        justifyContent: "center",
                        fontFamily: "Raleway, sans-serif",
                        }}
                    
                        onClick={this.routePhotography}
                    >Photo</Button>

            </Grid>
  </Grid>
  <Footer />
    </div>
        )
    }
}

export default Home;