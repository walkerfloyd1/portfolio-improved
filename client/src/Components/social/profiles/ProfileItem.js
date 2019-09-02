import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProfileItem = ({
    profile: {
        user: {
            _id,
            name,
            //image
        },
        location,
        bio
    }
}) => {
    return (
        <div className="profile bg-light">
            <div>
                <h2>{name}</h2>
                <p>{bio}</p>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className="btn btn-primary">
                    View profile
                </Link>
            </div>
            
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem;
