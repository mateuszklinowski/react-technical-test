import React from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";
import {SeparatorComponent} from "../shared/separator.component";
import {navigationButtons} from "./navigation.buttons";
import {ButtonComponent} from "../shared/buttom.component";
import {UserContainer} from "../user/user.container";
import styled from 'styled-components'

const StyledNav = styled.nav`
    background-color: #ee5f63;
    position: fixed;
    top: 0;
    left:0;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    padding: 1rem
`;

export const MenuComponent = (props) => {
    const {toggleMenu} = props;

    return (
        <StyledNav>

            <MenuHeader toggleMenu={toggleMenu}/>
            <UserContainer/>
            <div>
                {navigationButtons.map(({text, icon}, index) => (
                    <>
                        {!!index && <SeparatorComponent/>}
                        <ButtonComponent icon={icon} key={text}>
                            {text}
                        </ButtonComponent>
                    </>
                ))}
            </div>
            <MenuFooter/>

        </StyledNav>
    )
};