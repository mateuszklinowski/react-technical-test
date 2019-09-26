import React, { useState } from 'react';
import { MenuComponent } from "./menu/menu.component";

function App() {
  const [isOpen, setMenu] = useState(true);

  const toggleMenu = () => setMenu(state => !state);

  return (
    <div>
        <button type="button" onClick={toggleMenu} aria-expanded={isOpen}>Open menu</button>
        {isOpen && <MenuComponent toggleMenu={toggleMenu}/>}
    </div>
  );
}

export default App;
