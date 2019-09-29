import React, {Fragment} from 'react';
import {SeparatorComponent} from "../shared/separator.component";
import {ButtonComponent} from "../shared/buttom.component";
import styled from "styled-components";

const DesktopDiv = styled.div`
flex: 0 0 350px;
`;

export const DesktopButtons = ({buttons, isMobile}) => (
    !isMobile && <DesktopDiv>
        {buttons.map(({text}, index) => (
            <Fragment key={text}>
                {!!index && <SeparatorComponent color="transparent"/>}
                <ButtonComponent>
                    {text}
                </ButtonComponent>
            </Fragment>
        ))}
    </DesktopDiv>
);