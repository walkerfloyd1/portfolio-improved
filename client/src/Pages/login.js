import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../Components/social/redux/auth';
import Spotify from '../Components/spotify/Spotify';


const Login = ({
    login,
    isAuthenticated
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {
        email, 
        password
    } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    if (isAuthenticated) {
        return <Redirect to="/about" />
    }
    return (
        <Fragment>
            <h1>
                Login
            </h1>
            <p>
                Log in to your account
            </p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    value={email} 
                    onChange={e => onChange(e)} 
                    required/>
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} onChange={e => onChange(e)} required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
