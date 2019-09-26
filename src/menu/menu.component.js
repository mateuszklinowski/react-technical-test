import React from 'react';
import {MenuFooter} from "./footer.component";
import {MenuHeader} from "./header.component";

export const MenuComponent = (props) => {
    const { toggleMenu } = props;

    return (
        <nav>
            <MenuHeader toggleMenu={toggleMenu}/>
            One day, I will be a menu...
            <MenuFooter/>
        </nav>
    )
};