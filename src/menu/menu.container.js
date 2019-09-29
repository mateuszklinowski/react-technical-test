import React from 'react';
import {MenuComponent} from "./menu.component";
import {fakeConnect} from "../utils/fakeConnect";

// FAKE container component
const mobileNavButtons = [
    {
        text: "Profile",
        icon: "user-circle",
    },
    {
        text: "My Bookings",
        icon: "plane"
    },
    {
        text: "My Payments",
        icon: "credit-card"
    },
    {
        text: "Support",
        icon: "life-ring"
    },
    {
        text: "Contact Us",
        icon: "phone-alt"
    },
    {
        text: "Log Out",
        icon: "sign-in-alt"
    },
    {
        text: "About",
        icon: "question-circle"
    },
    {
        text: "FAQ",
        icon: "info-circle"
    }
];

const desktopNavButtons = [
    {
        text: 'Home',
    },
    {
        text: 'Flights',
    },
    {
        text: 'Resume Application'
    }
];

export const MenuContainer = fakeConnect({mobileNavButtons, desktopNavButtons})(MenuComponent);