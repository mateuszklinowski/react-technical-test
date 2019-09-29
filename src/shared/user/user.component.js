import React from 'react';
import styled from 'styled-components';
import {useIsMobile} from "../../utils/useIsMobile.hook";
import {currencyFormatter} from "../../utils/currencyFormatter/currencyFormatter";
import {SeparatorComponent} from "../separator.component";
import {AvatarComponent} from "./avatar.component";

const StyledUser = styled.div`
display: flex;
flex-direction:  ${props => props.isMobile ? 'column' : 'row'};
align-items: ${props => props.isMobile ? 'center' : 'inherit'};
margin-bottom: 1rem;
flex-wrap: wrap;
`;

const StyledSection = styled.section`
display: flex;
flex-direction: column;
padding-left: ${props => props.isMobile ? '0' : '1rem'};
align-items: ${props => props.isMobile ? 'center' : 'inherit'};
`

const Info = styled.span`
font-weight: ${props => props.isMobile ? "normal" : "700"};
`;

export const UserComponent = (props) => {
    const isMobile = useIsMobile();
    const {user = {}} = props;

    const getBalanceInfo= (isMobile) => isMobile ? (
        <>
            <Info isMobile={isMobile}>Available balance</Info>
            <Info isMobile={isMobile}>{currencyFormatter(user.balance)}</Info>
        </>
    ) : (
        <div>
            <Info isMobile={isMobile}>{currencyFormatter(user.balance)} </Info>
            <Info isMobile={isMobile}>Available balance</Info>
        </div>
    );

    return (
        <>
            <StyledUser isMobile={isMobile}>
                <AvatarComponent avatar={user.avatar} name={user.name}/>
                <StyledSection isMobile={isMobile}>
                    <Info isMobile={isMobile}>{`${user.name} ${user.surname}`}</Info>
                    {getBalanceInfo(isMobile)}
                </StyledSection>
            </StyledUser>
            <SeparatorComponent color={isMobile ? 'transparent' : undefined}/>
        </>
)
};
