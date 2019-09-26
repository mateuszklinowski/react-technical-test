import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App';

describe('App', () => {
    it('toggle menu', () => {
        const { container } = render(<App/>);

        const menu = container.querySelector("nav");
        expect(menu).toBeTruthy();

        const menuCloseButton = menu.querySelector('header button');
        fireEvent.click(menuCloseButton);
        expect(container.querySelector("nav")).toBeFalsy();

        const menuOpenButton = container.querySelector('button[aria-expanded="false"]');
        fireEvent.click(menuOpenButton);
        expect(container.querySelector("nav")).toBeTruthy();
    })
});