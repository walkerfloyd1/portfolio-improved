import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';

import PortfolioContainer from '../Components/PortfolioContainer'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <PortfolioContainer />
                <Footer />
            </div>
        )
    }
}

export default Portfolio;