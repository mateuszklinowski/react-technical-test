import React from 'react';
import styled from "styled-components";

const Avatar = styled.div`
border-radius: 50%;
background-color: white;
width: 46px;
height: 46px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
img{
    width: auto;
    height: 32px;
}
`;

export const AvatarComponent = ({avatar, name}) => (
    <Avatar>
        <img src={avatar} alt={`${name} avatar`}/>
    </Avatar>
);
