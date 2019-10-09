import React, { Component } from 'react';

import Image from 'react-image-resizer';

import Grid from '@material-ui/core/Grid';

import Profile from '../images/profile.jpg';

import Container from '@material-ui/core/Container';

class Bio extends Component {
    render () {
        return (
        <Container>
            <Grid container
            direction="column"
            alignItems="center"
            justify="center"
            >
                    <Grid item lg={6}>
                    <Container style={{
                        position: "relative",
                        paddingTop: "25%",
                        width: "80%",
                    }}>
                    <Image src={Profile} 
                    height={350}
                    width={350}
                    />
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <Container style={{
                        paddingTop: "20px",
                        marginBottom: "20px",
                        marginTop: "10px",
                        top: "75%",
                        position: "fixed",
                        width: "80%",
                        height: "auto",
                        alignContent: "center",           
                        justify: "center",
                        textAlign: "center",
                        fontFamily: "Raleway, sans-serif",
                        overflow: "hidden",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                <p> I am a web developer experienced in: HTML, CSS, NodeJS, MongoDB, MySQL, Sequelize, Redux, Javascript, and React. I am 23 years old and am a graduate of Emerson College and most recently completed a 3 Month Full-Time Intensive Full Stack Web Development Program at UCLA Extension</p>
                <p> My hobbies include: Photography, coding, screenwriting, exercising, learning, and watching movies. Please click on one of the tabs above to check out my work!</p>
                    </Container>
                </Grid>
            </Grid>
            </Container>
        )
    }
}

export default Bio;