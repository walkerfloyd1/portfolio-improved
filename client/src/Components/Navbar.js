import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './social/redux/auth';

const Navbar = ({
  auth: {
    isAuthenticated,
    loading
  },
  logout 
}) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profile">
          About
          </Link>
      </li>
      <li>
        <Link to="/portfolio">
          Portfolio
          </Link>
      </li>
      <li>
        <Link to="/film">
          Film
          </Link>
      </li>
      <li>
        <Link to="/photo">
          Photo
          </Link>
      </li>
      <li>
        <Link to="/posts">
          Community
          </Link>
      </li>
      <li>
        <Link to="/my-profile">
          My Profile
          </Link>
      </li>
      <li>
        <a onClick={logout} href="#!"><i className='fas fa-sign-out-alt' />{' '}
        <span className="hide-sm">
          Logout
        </span></a></li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
        <i className="fas fa-code" />
        Walker Floyd Portfolio
        </Link>
      </h1>
      { !loading && (
        <Fragment>
          {isAuthenticated ? authLinks : guestLinks }
        </Fragment>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect( mapStateToProps, { logout })(Navbar);
