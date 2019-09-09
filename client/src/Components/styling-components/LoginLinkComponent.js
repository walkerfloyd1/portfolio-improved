import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const LinkCom = styled(Link)`
    color: palevioletred;
    display: block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
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