import React from 'react';
import {UserComponent} from "./user.component";

// FAKE container component
const user = {
    name: 'Dominik',
    surname: 'Biel',
    balance:  1500.00,
};

const fakeConnect = (connectProps) => (Component) => {
    return (props) => <Component {...connectProps} {...props} />
};

export const UserContainer = fakeConnect({user})(UserComponent);