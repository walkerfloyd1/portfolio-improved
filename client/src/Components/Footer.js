import React from "react";

import Grid from '@material-ui/core/Grid';

import { IconContext } from "react-icons";

import { SocialIcon } from 'react-social-icons';

import { FaEnvelope } from 'react-icons/fa';

import { FaPhone } from 'react-icons/fa';

const bottomFooter = () => {
  return (
<div>
    <div className="footer"
        style={{
            backgroundColor: "black",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            textAlign: "center"
        }}
        >
    <Grid container
            spacing={10}
            direction="row"
            alignItems="center"
            justify="center"
    >
    <IconContext.Provider value={{ color: "#809fff",
    size: "60px"}}>
    <Grid item sm={3}>
    <a href="tel:+16268173064"><FaPhone style={{
        color: "#00ace6"
    }}/></a>
    </Grid>
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
        </Grid>
        </div>
</div>
  );
}

export default bottomFooter;