import React from 'react';
import {SeparatorComponent} from "../shared/separator.component";
import awaymoLogo from '../assets/awaymoFullWhite.svg';
import styled from 'styled-components';
import {ButtonComponent} from "../shared/buttom.component";
import {useIsMobile} from "../utils/useIsMobile.hook";

const StyledImage = styled.img`
    display: block;
    margin: auto;
    height: 26px;
`;

const Absolute = styled.div`
position: absolute;
top:50%;
right: 1rem;
transform: translateY(-50%);
`;

const RelativeDiv = styled.div`
position:relative;
`;

export const MenuHeader = (props) => {
    const isMobile = useIsMobile();
    const { toggleMenu } = props;

    return (
        <header>
            <RelativeDiv>
                <StyledImage src={awaymoLogo} alt="awaymo logo"/>
                <Absolute>
                    <ButtonComponent onClick={toggleMenu} icon='times'/>
                </Absolute>
            </RelativeDiv>
            <SeparatorComponent color={isMobile ? undefined : "white"} bold={!isMobile}/>
        </header>
    )
};