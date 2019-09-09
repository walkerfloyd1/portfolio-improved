import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../Components/social/redux/auth';
import { Container } from '../Components/styling-components/Container';


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
    <div className="dark-overlay">
        <Container>
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
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    onChange={e => onChange(e)} 
                    required/>
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    style = {{
                        "border-radius": "6px",
                        "border": "2px solid red",
                        "display": "block",
                        "margin": "0 0 1em",
                        "padding": "6px"
                    }}
                    value={password} onChange={e => onChange(e)} required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </Container>
        </div>
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
