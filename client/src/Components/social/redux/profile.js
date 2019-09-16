import axios from 'axios';
import { setAlert } from './alert';


import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    GET_REPOS,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES,
} from './types';

//This is a function to get the current users profile

export const getCurrentProfile = () => async dispatch => {
    try {
       const res = await axios.get('/api/profile/me');
       
       dispatch({
           type: GET_PROFILE,
           payload: res.data
       });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText,
            status: error.response.status }
        })
    }
}

export const getProfiles = () => async dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    });
    try {
       const res = await axios.get('/api/profile');
       
       dispatch({
           type: GET_PROFILES,
           payload: res.data
       });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText,
            status: error.response.status }
        })
    }
}

export const getGithubRepos = () => async dispatch => {
    
    try {
       const res = await axios.get(`/api/profile/github/walkerfloyd1`);
       
       dispatch({
           type: GET_REPOS,
           payload: res.data
       });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText,
            status: error.response.status }
        })
    }
}

export const getProfileById = userId => async dispatch => {
    
    try {
       const res = await axios.get(`/api/profile/user/${userId}`);
       
       dispatch({
           type: GET_PROFILE,
           payload: res.data
       });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText,
            status: error.response.status }
        })
    }
}

//Action to create or update a profile

export const createProfile = (
    formData, 
    history, 
    edit = false) => async dispatch => {
        try {
            const config = {
                header: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await axios.post('/api/profile', formData, config);

            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });

            dispatch(setAlert( edit ? 'Profile Updated' : 'Profile Created', 'success'));

            if (!edit) {
                history.push('/my-profile');
            }
        } catch (error) {

            const errors = error.response.data.errors;

            if (errors) {
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.response.statusText,
                status: error.response.status }
            })
            
        }
    }

// Delete account and Profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure you want to delete your account?')) {

    try {
        const res = await axios.delete('/api/profile');

        dispatch({
            type: CLEAR_PROFILE,
        });

        dispatch({
            type: ACCOUNT_DELETED,
        });

        dispatch(setAlert('Account Permanently Removed'))
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status}
        });
    }
}
};
