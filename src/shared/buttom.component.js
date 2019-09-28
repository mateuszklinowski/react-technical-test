import React from 'react';
import styled from 'styled-components'

const noop = () => {};

const StyledButton = styled.button`
    display: flex;
    border: none;
    background: transparent;
    color: white;
    font-size: 18px;
    font-weight: ${props => props.isMobile ? "normal" : "700"};
    outline: none !important;
    i{
        margin: 0 0.5rem 0 0; 
        min-width:23px;
    }
`;

export const ButtonComponent = ({icon, children, onClick = noop}) => {
    return (
        <StyledButton onClick={onClick}>
            {icon && <i className={`fa fa-${icon}`}/>}
            {children}
        </StyledButton>
    )
};