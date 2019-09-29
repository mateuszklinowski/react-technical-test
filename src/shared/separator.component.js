import React from 'react';
import styled from 'styled-components';

const Separator = styled.span`
display: block;
border-top-style:solid;
border-top-width: ${props => props.bold ? "3px" : "1px"};
border-color: ${props => props.color ? props.color : "#ffffff52"};
margin: 1rem 0;
width: 100%;
`;


export const SeparatorComponent = ({color, bold}) => {
    return <Separator color={color} bold={bold}/>
};