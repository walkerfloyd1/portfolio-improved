import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import '../styles/profile.css';

import Bio from '../Components/bio'

import Footer from '../Components/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="container">
                        <Bio />
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;