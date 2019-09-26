import React, { useState } from 'react';
import { MenuComponent } from "./menu/menu.component";

function App() {
  const [isOpen, setMenu] = useState(true);

  const toggleMenu = () => setMenu(state => !state);

  return (
    <div>
        <button type="button" onClick={toggleMenu}>Open menu</button>
        {isOpen && <MenuComponent/>}
    </div>
  );
}

export default App;
