import React, {Fragment} from 'react';
import styled from "styled-components";
import {UserContainer} from "../shared/user/user.container";
import {SeparatorComponent} from "../shared/separator.component";
import {ButtonComponent} from "../shared/buttom.component";

const MobileDiv = styled.div`
flex: 1 0 auto;
max-width: ${props => props.isMobile ? 'none' : '450px'};
`;

export const MobileButtons = ({buttons, isMobile}) => (
    <MobileDiv isMobile={isMobile}>
        <UserContainer/>
        {buttons.map(({text, icon}, index) => (
            <Fragment key={text}>
                {!!index && <SeparatorComponent color={isMobile ? undefined : 'transparent'}/>}
                <ButtonComponent icon={isMobile && icon} >
                    {text}
                </ButtonComponent>
            </Fragment>
        ))}
    </MobileDiv>
);