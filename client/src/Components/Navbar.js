import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/auth';

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
        <Link to="/community">
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

// class Navbar extends React.Component {

//     render(){
//       return (
//         <ResponsiveMenu
//           menuOpenButton={<div />}
//           menuCloseButton={<div />}
//           changeMenuOn="800px"
//           largeMenuClassName="large-menu-classname"
//           smallMenuClassName="small-menu-classname"
//           menu={
//             <Menu>
//             <ul>
//               <li className="nav-item">
//                 <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/portfolio"
//                   className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
//                 >
//                   Coding
//                 </Link>
//              </li>
//              <li className="nav-item">
//                 <Link
//                   to="/film"
//                   className={window.location.pathname === "/film" ? "nav-link active" : "nav-link"}
//                 >
//                   Film
//                 </Link>
//              </li>
//              <li className="nav-item">
//                 <Link
//                   to="/photo"
//                   className={window.location.pathname === "/photo" ? "nav-link active" : "nav-link"}
//                 >
//                   Photography
//                 </Link>
//              </li>
//              <li className="nav-item">
//                 <Link to="/community" className={window.location.pathname === "/social" ? "nav-link active" : "nav-link"}>
//                   Social
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/info" className={window.location.pathname === "/info" ? "nav-link active" : "nav-link"}>
//                   My Account
//                 </Link>
//               </li>
//             </ul>
//             </Menu>
//           }
//           />  
//       );
//     }
//   }
  
//   export default Navbar;