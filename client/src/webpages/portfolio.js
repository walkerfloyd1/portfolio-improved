import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';

import GithubRepos from '../Components/GithubRepos'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GithubRepos />
                <Footer />
            </div>
        )
    }
}

export default Portfolio;