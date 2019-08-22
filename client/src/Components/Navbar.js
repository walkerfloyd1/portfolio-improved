import ResponsiveMenu from 'react-responsive-navbar';
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Menu = styled.div`
  
  ul {
    padding: 1px;
  }
  li {
    display: inline-block;
    font-size: 13px;
    alignContent: 'center';
    padding-bottom: 20px;
    border-bottom: 3px solid black;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    fontFamily: "Raleway, sans-serif";
    font-size: 20px;
    margin: 80px
    color: black;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

class Navbar extends React.Component {

    render(){
      return (
        <ResponsiveMenu
          menuOpenButton={<div />}
          menuCloseButton={<div />}
          changeMenuOn="800px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <Menu>
            <ul>
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                  Coding
                </Link>
             </li>
             <li className="nav-item">
                <Link
                  to="/film"
                  className={window.location.pathname === "/film" ? "nav-link active" : "nav-link"}
                >
                  Film
                </Link>
             </li>
             <li className="nav-item">
                <Link
                  to="/photo"
                  className={window.location.pathname === "/photo" ? "nav-link active" : "nav-link"}
                >
                  Photography
                </Link>
             </li>
            </ul>
            </Menu>
          }
          />  
      );
    }
  }
  
  export default Navbar;