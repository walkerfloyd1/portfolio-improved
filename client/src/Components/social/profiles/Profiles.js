import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import { getProfiles } from '../redux/profile';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
                <List className="profiles-list" style={{
                marginTop: '0px',
                width: '400px',
                maxHeight: '200px',
                overflow: 'auto'}}
                >
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ListItem>
                            <ProfileItem key={profile._id} profile={profile} />
                            </ListItem>
                        ))
                    ) : (<h4>No Profiles found...</h4>)}
                </List>
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
