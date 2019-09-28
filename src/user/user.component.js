import React from 'react';

export const UserComponent = (props) => {
    const { user = {} } = props;

    return (
        <>
            <h2>{user.name}</h2>
            <h3>{user.surname}</h3>
            <h2>{user.balance}</h2>
        </>
    )
};