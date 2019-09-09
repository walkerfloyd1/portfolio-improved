import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const LinkCom = styled(Link)`
    color: white;
    display: inline-block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
    margin: 20px;
    width: 100%;
    font-size: 30px;

    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

    font-family: 'Roboto Mono';

    &:hover {
        background: white;
        color: black;
        border-bottom: 1px solid
      }
`

export function LoginLinkStyled({
    children
}) {
    return (
        <LinkCom as={Link} to="/login">
            {children}
        </LinkCom>
    )
};