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
        <div>
            <div>
                <Link to={`/profile/${_id}`} className="btn btn-primary">
                {name}
                </Link>
            </div>
            
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem;
