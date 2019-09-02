import React from "react";

import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';

import Footer from "react-footer-comp";

import { IconContext } from "react-icons";

import { SocialIcon } from 'react-social-icons';

import { FaEnvelope } from 'react-icons/fa';

import { FaPhone } from 'react-icons/fa';

const bottomFooter = () => {
  return (
<div>
    <Footer
        bgColor={"black"}
        textStyle={{ color: "yellow", fontSize: 20, fontFamily: "Michroma"}}
        width={425}
        height={150}
        text={
    <Grid container
            spacing={10}
            direction="row"
            alignItems="center"
            justify="center"
    >
    <IconContext.Provider value={{ color: "#809fff",
    size: "60px"}}>
    <Grid item sm={3}>
    <a href="tel:+18432713434"><FaPhone style={{
        color: "#00ace6"
    }}/></a>
    </Grid>
    {/* <IconContext.Provider value={{ color: "#809fff",
    size: "60px"}}> */}
    <Grid item lg={6}>

        <SocialIcon url="https://twitter.com/blackfalcon_unc" />
        <SocialIcon url="https://www.instagram.com/floyds_fotos/" />
        <SocialIcon url="https://github.com/walkerfloyd1" />
        <SocialIcon url="https://www.linkedin.com/in/walker-floyd-b53182123/" />
        
    </Grid>
    <Grid item sm={3}>
    <a href="mailto:walkerfloydprofessional@gmail.com"><FaEnvelope style={{
        color: "#33adff"
    }}/></a>
        </Grid>
    </IconContext.Provider>
        </Grid>}
        />
</div>
  );
}

export default bottomFooter;