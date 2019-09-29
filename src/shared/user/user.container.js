import React from 'react';
import {UserComponent} from "./user.component";
import avatar from '../../assets/avatar.png';

// FAKE container component
const user = {
    name: 'Dominik',
    surname: 'Biel',
    balance:  1500.00,
    avatar,
};

const fakeConnect = (connectProps) => (Component) => {
    return (props) => <Component {...connectProps} {...props} />
};

export const UserContainer = fakeConnect({user})(UserComponent);