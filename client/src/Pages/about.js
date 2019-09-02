import React, { Component } from 'react';

import '../styles/profile.css';

import Bio from '../Components/bio'

import Footer from '../Components/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <div class="container">
                        <Bio />
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;