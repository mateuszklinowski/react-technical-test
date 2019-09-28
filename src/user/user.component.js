import React from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

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
}
`;

const Info = styled.span`
font-weight: ${props => props.isMobile ? "normal" : "700"};
`;

export const UserComponent = (props) => {
    const {user = {}} = props;

    return (
        <StyledUser>
            <Avatar>
                <img src={user.avatar} alt={`${user.name} avatar`}/>
            </Avatar>
            <Info>{`${user.name} ${user.surname}`}</Info>
            <Info>Available balance</Info>
            <Info>{user.balance}</Info>
        </StyledUser>
    )
};