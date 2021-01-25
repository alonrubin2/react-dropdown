import './App.css';
import Dropdown from './Dropdown/Dropdown';
import DropdownButton from './Dropdown/DropdownButton/DropdownButton';
import DropdownMenu from './Dropdown/DropdownButton/DropdownMenu/DropdownMenu';
import DropdownItem from './Dropdown/DropdownButton/DropdownMenu/DropdownItem/DropdownItem'
import { useState } from 'react';


function App() {



  return (
    <div className="App">
      <Dropdown >
        <DropdownButton >Dropdown Button</DropdownButton>
        <DropdownMenu>
          <DropdownItem route="/">Gallery</DropdownItem>
          <DropdownItem route="/">About Us</DropdownItem>
          <DropdownItem route="/">Contact</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div >
  );
}

export default App;
