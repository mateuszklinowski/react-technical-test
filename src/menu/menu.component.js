import React, {Fragment} from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";
import {SeparatorComponent} from "../shared/separator.component";
import {ButtonComponent} from "../shared/buttom.component";
import {UserContainer} from "../shared/user/user.container";
import styled from 'styled-components'
import {useIsMobile} from "../utils/useIsMobile.hook";

const StyledNav = styled.nav`
    background-color: #ee5f63;
    position: absolute;
    top: 0;
    left:0;
    width: calc(100% - 2rem);
    min-height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    padding: 1rem
`;

const StyledDiv = styled.div`
display: flex;
`;

const MobileDiv = styled.div`
flex: 1 0 auto;
max-width: ${props => props.isMobile ? 'none' : '450px'};
`;

const DesktopDiv = styled.div`
flex: 0 0 350px;
`;

export const MenuComponent = (props) => {
    const isMobile = useIsMobile();
    const {toggleMenu, mobileNavButtons, desktopNavButtons} = props;

    return (
        <StyledNav>
            <MenuHeader toggleMenu={toggleMenu}/>
            <StyledDiv>
                {!isMobile && <DesktopDiv>
                    {desktopNavButtons.map(({text}, index) => (
                        <Fragment key={text}>
                            {!!index && <SeparatorComponent color="transparent"/>}
                            <ButtonComponent>
                                {text}
                            </ButtonComponent>
                        </Fragment>
                    ))}
                </DesktopDiv>}
                <MobileDiv isMobile={isMobile}>
                    <UserContainer/>
                    {mobileNavButtons.map(({text, icon}, index) => (
                        <Fragment key={text}>
                            {!!index && <SeparatorComponent color={isMobile ? undefined : 'transparent'}/>}
                            <ButtonComponent icon={isMobile && icon} >
                                {text}
                            </ButtonComponent>
                        </Fragment>
                    ))}
                </MobileDiv>
            </StyledDiv>
            <MenuFooter/>
        </StyledNav>
    )
};