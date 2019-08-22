import React, { Component } from 'react';

import Image from 'react-image-resizer';

import Grid from '@material-ui/core/Grid';

import Profile from '../images/profile.jpg';

import Container from '@material-ui/core/Container';

class Bio extends Component {
    render () {
        return (
            <Grid container
            spacing={6}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
            top: '50%'}}>
                    <Grid item lg={6}>
                    <Image src={Profile} 
                    height={350}
                    width={350}
                    style={{
                        border: "3px solid #4d4d4d"
                    }}
                    />
                </Grid>
                <Grid item lg={6}>
                    <Container style={{
                        marginTop: "0px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        height: "auto",
                        alignContent: "center",
                        backgroundColor: "#ffe6e6",            
                        justify: "center",
                        textAlign: "center",
                        fontFamily: "Raleway, sans-serif"
                    }}>
                <p> I am a web developer experienced in: HTML, CSS, NodeJS, MongoDB, MySQL, Sequelize, Javascript, and React. I am 23 years old and am a graduate of Emerson College and most recently completed a 3 Month Full-Time Intensive Full Stack Web Development Program at UCLA Extension</p>
                <p> My hobbies include: Photography, coding, screenwriting, exercising, learning, and watching movies. Please click on one of the tabs above to check out my work!</p>
                    </Container>
                </Grid>

            </Grid>
        )
    }
}

export default Bio;