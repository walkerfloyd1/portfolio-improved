import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import { getProfiles } from '../redux/profile';

import Navbar from '../../Navbar';

import Footer from '../../Footer';

const Profiles = ({
    getProfiles,
    profile: {
        profiles,
        loading
    }
}) => {
    useEffect(() => {
        getProfiles()
    }, [getProfiles])
    return loading ? <h1>
        Loading
    </h1> : (
        <Fragment>
            <Navbar />
            <h1 className="large text-primary">
                    Developers
                </h1>
                <p className="lead">
                    <i className="fab fa-connectdevelop" /> Browse
                </p>
                <div className="profiles">
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : (<h4>No Profiles found...</h4>)}
                </div>
                <Footer />
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
