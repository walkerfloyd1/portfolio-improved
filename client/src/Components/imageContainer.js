import React, { Component } from 'react';

import Picture from '../images/profile.jpg';

import Image from 'react-image-resizer';

import Grid from '@material-ui/core/Grid';

class ProfileImage extends Component {
    render() {
        return (
            <Grid container
            spacing={6}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{

            }}>
                <Grid item lg={6}>
            <Image 
            src={Picture}
            height={'50%'}
            width={800}/>
                </Grid>
            </Grid>
        )
    }
}

export default ProfileImage;