import React from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";
import styled from 'styled-components'
import {useIsMobile} from "../utils/useIsMobile.hook";
import {ANIMATION_DURATION} from "../constants/media";
import {DesktopButtons} from "./desktopButtons.component";
import {MobileButtons} from "./mobileButtons.component";

const position = {
    entering:  0,
    entered:  0,
    exiting: "100%",
    exited:  "100%",
};

const StyledNav = styled.nav`
    background-color: #ee5f63;
    position: absolute;
    top: ${props => !props.isMobile ? "-"+position[props.transitionState] : 0};
    left: ${props => props.isMobile ? position[props.transitionState] : 0};
    width: calc(100% - 2rem);
    min-height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: all ${ANIMATION_DURATION}ms ease-in-out;
`;

const StyledDiv = styled.div`
display: flex;
`;

export const MenuComponent = (props) => {
    const isMobile = useIsMobile();
    const {toggleMenu, mobileNavButtons, desktopNavButtons, transitionState} = props;

    return (
        <StyledNav transitionState={transitionState} isMobile={isMobile}>
            <MenuHeader toggleMenu={toggleMenu}/>
            <StyledDiv>
                <DesktopButtons buttons={desktopNavButtons} isMobile={isMobile}/>
                <MobileButtons buttons={mobileNavButtons} isMobile={isMobile}/>
            </StyledDiv>
            <MenuFooter/>
        </StyledNav>
    )
};