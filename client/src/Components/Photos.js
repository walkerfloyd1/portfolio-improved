import React, { Component } from 'react';


// import Beaufort from '../images/photography/beaufort.jpg';
// import Cake from '../images/photography/Cake.jpg';
// import Bridge from '../images/photography/Downtown-Bridge-yo.jpg';
// import Expanse from '../images/photography/expanse.jpg';
// import Fripp from '../images/photography/Fripp.jpg';
// import Houses from '../images/photography/houses.jpg';
// import Newpoint from '../images/photography/IMG_0140-1.jpg';
// import Charles from '../images/photography/IMG_6175.JPG';
// import Nature from '../images/photography/nature.jpg';
// import Dock from '../images/photography/newpoint.jpg';
// import Sun from '../images/photography/sunnyday.jpg';

import ControlledCarousel from '../Components/photoCarousel';

import Grid from '@material-ui/core/Grid';

class Photos extends Component {
    render () {
        return (
        <div>
            <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <Grid item lg={9}><ControlledCarousel /></Grid>
                </Grid>
        </div>
        )
    }
}

export default Photos;