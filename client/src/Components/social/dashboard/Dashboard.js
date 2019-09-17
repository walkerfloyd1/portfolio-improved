import { getCurrentProfile } from '../redux/profile';
import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({
    getCurrentProfile,
    auth: {
        user
    }, 
    profile: {
        profile,
        loading
    }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <h1>Loading</h1> : <Fragment>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome { user && user.name}
        </p>
        {profile !== null ? <Fragment>
            <h1>{profile.bio}</h1>
        </Fragment> : <Fragment>
            You need to setup a profile!
        </Fragment>}
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
})

export default connect(
    mapStateToProps, {
        getCurrentProfile
    }
)(Dashboard);