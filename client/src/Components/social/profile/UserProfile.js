import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../redux/profile';
import UserProfileTop from './UserProfileTop';
import UserAbout from './UserAbout';

import Navbar from '../../Navbar';

import Footer from '../../Footer';

const UserProfile = ({
    getProfilebyId,
    match,
    auth,
    profile: {
        profile,
        loading
    }
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById])
    return (
        <Fragment>
            {profile === null ? 
            <div>
            <Navbar />
            <Link to="/create-profile" className="btn btn-light">
                Create your Profile
            </Link>
            <Footer />
            </div> : <Fragment>
            <Navbar />
                {/* //This is not working yet */}
            <Link to="/profiles" className="btn btn-light">
                Back to Profiles
            </Link>
            {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id 
            && (
                <Link to="/edit-profile" className="btn btn-dark">
                    Edit Profile
                </Link>
            )}
            <div class="profile-grid my-1">
                    <UserProfileTop profile={profile}/>
                    <UserAbout profile={profile}/>
                    <div className="profile-exp bg-white p-2">
                        <h2 className="text-primary">Bio</h2>
                        {profile.bio ? (
                            <Fragment>
                                {profile.bio}
                            </Fragment>
                        ) : (<h4>No Bio</h4>)}
                    </div>
                    
                </div>
                <Footer />
            </Fragment>
        }
        </Fragment>
    )
}

UserProfile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(UserProfile);
