import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import App from './App';

describe('App', () => {
    it('toggle menu', async () => {
        const { container } = render(<App/>);

        const menu = container.querySelector("nav");
        const nav = container.querySelector("nav");
        expect(menu).toBeTruthy();
        expect(window.getComputedStyle(nav).left).toBe('0px');

        const menuCloseButton = menu.querySelector('header button');
        fireEvent.click(menuCloseButton);
        await wait();
        expect( window.getComputedStyle(nav).left).toBe('100%');

        const menuOpenButton = container.querySelector('button[aria-expanded="false"]');
        fireEvent.click(menuOpenButton);

        await wait();
        expect( window.getComputedStyle(nav).left).toBe('0px');
    })
});