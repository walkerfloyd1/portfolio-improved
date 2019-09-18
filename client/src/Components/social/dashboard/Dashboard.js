import { getCurrentProfile } from '../redux/profile';
import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner';
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

    return loading && profile === null ? <div><Spinner /> <Link to="create-profile">
        Create/Edit Your Profile
    </Link></div> : <Fragment>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome { user && user.name}
        </p>
        {profile !== null ? <Fragment>
            <h1>{profile.bio}</h1>
            <Link to="/create-profile" className="btn btn-primary"> If you don't have one, create a profile here</Link>
        </Fragment> : <Spinner />}
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