import React from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";
import {SeparatorComponent} from "../shared/separator.component";
import { navigationButtons } from "./navigation.buttons";
import {ButtonComponent} from "../shared/buttom.component";

export const MenuComponent = (props) => {
    const { toggleMenu } = props;

    return (
        <nav>
            <MenuHeader toggleMenu={toggleMenu}/>
            <SeparatorComponent/>
            TODO Profile component
            {navigationButtons.map(ButtonComponent)}
            <SeparatorComponent/>
            <MenuFooter/>
        </nav>
    )
};