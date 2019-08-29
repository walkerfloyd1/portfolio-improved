import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../../redux/profile';
import { Link, withRouter } from 'react-router-dom';

const EditProfile = ({
    profile: {
        profile,
        loading
    },
    createProfile,
    getCurrentProfile,
    history
}) => {
    const [formData, setFormData] = useState({
        location: '',
        status: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [displaySocials, toggleSocials ] = useState(false);

    useEffect(() => {
        getCurrentProfile();
        setFormData({
            location: loading || !profile.location ? '' : profile.location,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram,
        })
    }, [loading, getCurrentProfile]);

    const {
        location,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        createProfile(
            formData,
            history,
            true)
    }

    
    return (
        <div>
            
        </div>
    )
}

EditProfile.propTypes = {

}

export default EditProfile
