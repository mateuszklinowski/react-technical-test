import React from 'react';

export const MenuHeader = (props) => {
    const { toggleMenu } = props;

    return (
        <header>
            <span>LOGO PLACEHOLDER</span>
            <button onClick={toggleMenu}>X</button>
        </header>
    )
};