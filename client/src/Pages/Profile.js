import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import '../styles/profile.css';

import Bio from '../Components/bio'

import ProfileImage from '../Components/imageContainer';

import { ProfileContainer } from '../Components/ProfileContainer';

import Footer from '../Components/Footer';

class Profile extends Component {
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

export default Profile;