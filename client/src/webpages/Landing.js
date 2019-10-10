import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { RegisterLinkStyled } from '../Components/styling-components/RegisterLinkComponent';
import { LoginLinkStyled } from '../Components/styling-components/LoginLinkComponent';

const Landing = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/profile" />
  }

    return (
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Walker Floyd Portfolio</h1>
          <div className="buttons">
            <RegisterLinkStyled to="/register">Register</RegisterLinkStyled>
            <LoginLinkStyled to="/login">Login</LoginLinkStyled>
          </div>
        </div>
      </div>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);