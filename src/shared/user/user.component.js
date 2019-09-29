import React from 'react';
import styled from 'styled-components';
import {useIsMobile} from "../../utils/useIsMobile.hook";
import {currencyFormatter} from "../../utils/currencyFormatter/currencyFormatter";

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
`;

const Info = styled.span`
font-weight: ${props => props.isMobile ? "normal" : "700"};
`;

export const UserComponent = (props) => {
    const isMobile = useIsMobile();
    const {user = {}} = props;

    return (
        <StyledUser>
            <Avatar>
                <img src={user.avatar} alt={`${user.name} avatar`}/>
            </Avatar>
            <Info isMobile={isMobile}>{`${user.name} ${user.surname}`}</Info>
            <Info isMobile={isMobile}>Available balance</Info>
            <Info isMobile={isMobile}>{currencyFormatter(user.balance)}</Info>
        </StyledUser>
    )
};