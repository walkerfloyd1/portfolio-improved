import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../Components/social/redux/alert';
import { register } from '../Components/social/redux/auth';
import PropTypes from 'prop-types';
import { Container } from '../Components/styling-components/Container';

const Register = ({
    setAlert,
    register,
    isAuthenticated
}) => {
    const [
        formData,
        setFormData
    ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {
        name,
        email,
        password,
        password2
    } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({
                name,
                email,
                password
            })
        }
    }

    if(isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <div className="dark-overlay">
        <Container>
            <h1>
                Register
            </h1>
            <p>
                Create your account
            </p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    value={name} 
                    onChange={e => onChange(e)} 
                    />
                </div>
                <div>
                    <input
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    value={email} 
                    onChange={e => onChange(e)} 
                    />
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    name="password"
                    value={password} 
                    onChange={e => onChange(e)} 
                    />
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    value={password2} 
                    onChange={e => onChange(e)} 
                    />
                </div>
                <input 
                type="submit" 
                className="btn btn-primary" 
                value="Register" />
            </form>
            <p>
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Container>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
