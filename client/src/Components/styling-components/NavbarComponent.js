import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 100%;
  
  ul {
    text-align: center;
    align-items: center;
    position: fixed;
    top: 30px;
    left: 50%
    transform: translate(-50%, -50%)
    
  }
  li {
    display: inline-block;
    font-size: 13px;
    margin-left: 20px;
    align: center;
    paddingBottom: 100px;
    left: 50%
    transform: translate(-50%, -50%)
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    color: black;
    &:hover {
      color: white;
      border-bottom: 1px solid
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

export function NavbarStyled({
    children
}) {
    return (
        <Menu>
            {children}
        </Menu>
    )
}

