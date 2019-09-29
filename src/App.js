import React, { useState } from 'react';
import { MenuContainer } from "./menu/menu.container";
import styled from 'styled-components'
import {ButtonComponent} from "./shared/buttom.component";

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
        {isOpen && <MenuContainer toggleMenu={toggleMenu}/>}
    </StyledApp>
  );
}

export default App;
