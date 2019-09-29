import React, { useState } from 'react';
import { MenuContainer } from "./menu/menu.container";
import styled from 'styled-components'
import { Transition } from 'react-transition-group';
import {ButtonComponent} from "./shared/buttom.component";
import {ANIMATION_DURATION} from "./constants/media";

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

function App() {
  const [isOpen, setMenu] = useState(true);

  const toggleMenu = () => setMenu(state => !state);

  return (
    <StyledApp>
        <ButtonComponent onClick={toggleMenu} aria-expanded={isOpen} aria-label="open menu">
            Open menu
        </ButtonComponent>
        <Transition in={isOpen} timeout={ANIMATION_DURATION}>
            {transitionState => <MenuContainer toggleMenu={toggleMenu} transitionState={transitionState}/>}
        </Transition>
    </StyledApp>
  );
}

export default App;
