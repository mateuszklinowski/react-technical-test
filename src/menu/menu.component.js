import React from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";
import {SeparatorComponent} from "../shared/separator.component";
import { navigationButtons } from "./navigation.buttons";
import {ButtonComponent} from "../shared/buttom.component";
import {UserContainer} from "../user/user.container";

export const MenuComponent = (props) => {
    const { toggleMenu } = props;

    return (
        <nav>
            <MenuHeader toggleMenu={toggleMenu}/>
            <SeparatorComponent/>
            <UserContainer kappa={2}/>
            {navigationButtons.map(button => (
                <ButtonComponent {...button} key={button.text}/>
            ))}
            <SeparatorComponent/>
            <MenuFooter/>
        </nav>
    )
};