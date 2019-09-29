import React from 'react'
import {render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import App from './App';

describe('App', () => {
    it('toggle menu', async () => {
        const { container } = render(<App/>);

        const menu = container.querySelector("nav");
        expect(menu).toBeTruthy();

        const menuCloseButton = menu.querySelector('header button');
        fireEvent.click(menuCloseButton);
        await waitForElementToBeRemoved(()=>(container.querySelector("nav")));
        expect(container.querySelector("nav")).toBeFalsy();

        const menuOpenButton = container.querySelector('button[aria-expanded="false"]');
        fireEvent.click(menuOpenButton);

        expect(container.querySelector("nav")).toBeTruthy();
    })
});