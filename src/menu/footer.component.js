import React from 'react';
import styled from 'styled-components'
import {SeparatorComponent} from "../shared/separator.component";

const StyledLink = styled.a`
color: white;
display: block;
text-decoration: none;
cursor: pointer;
`;

const StyledFooter = styled.footer`
text-align: center;
width: 100%;
margin-top: auto;
`

export const MenuFooter = () => {
    return (
        <StyledFooter>
            <SeparatorComponent/>
            <span>We're here to help</span>
            <StyledLink href="tel: +4402080503459" rel="nofollow">
                +44 (0) 20 8050 3459
            </StyledLink>
            <StyledLink href="mailto: support@awaymo.com">
                support@awaymo.com
            </StyledLink>
        </StyledFooter>
    )
};