import React, { Fragment } from 'react';
import Spinner from '../images/Spinner.gif';
import Navbar from './Navbar';
import Footer from './Footer';


export default () => (
    <Fragment>
        <Navbar />
        <img 
        src={Spinner}
        style={{ width: '200px', margin: 'auto', display: 'block'}}
        alt="Loading..." />
        <Footer />
    </Fragment>
);