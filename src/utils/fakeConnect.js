import React from "react";

export const fakeConnect = (connectProps) => (Component) => {
    return (props) => <Component {...connectProps} {...props} />
};