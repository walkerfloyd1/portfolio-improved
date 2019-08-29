import React, { Component } from 'react';

import ControlledCarousel from '../Components/videoCarousel.js';

import Footer from '../Components/Footer';

import Navbar from '../Components/Navbar'

class Film extends Component {
    render() {
        return (
            <div>
            <ControlledCarousel />
            <Footer />
            </div>
        )
    }
}

export default Film;