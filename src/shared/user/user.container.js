import React from 'react';
import {UserComponent} from "./user.component";
import avatar from '../../assets/avatar.png';
import {fakeConnect} from "../../utils/fakeConnect";

// FAKE container component
const user = {
    name: 'Dominik',
    surname: 'Biel',
    balance:  1500.00,
    avatar,
};

export const UserContainer = fakeConnect({user})(UserComponent);