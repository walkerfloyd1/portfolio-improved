import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 6px;
    border: 2px solid red;
    display: block;
    margin: 0 0 1em;
    padding: 6px
`

export function InputStyled({
    children
}) {
    return (
        <Input>
            {children}
        </Input>
    )
}