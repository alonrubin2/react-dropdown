import React, { useContext } from 'react';
import './DropdownButton.css';
import { useState } from 'react';
import {Context} from '../Dropdown'

function DropdownButton(props) {
    const context = useContext(Context);

    function showMenu() {
        context.setIsShown(!context.isShown);
        console.log('changed', context.isShown)
      }

      function closeMenu() {
        context.setIsShown(false);
        console.log('cosled', context.isShown);
    }


    return (
        
        <button onClick={showMenu} onBlur={closeMenu} className="drop-button">
            {props.children}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPklEQVRIS+2U4TEEQRCFv4uADBABIkAEyOAyQASIACGIABEgAicCZEAG6rvq2bq6G7O9qvaHKv1na3d73ut+/XomjByTkfH5J+hVeFGiGbDdeyKXINauqWMRvAI7ywR+eIkCD4CnXLFd1j7wGG9WbxcrLroAzoH3aPEzSbIexW0Cl4A486jZtMziHjhOEph7CDwDdtJFjcAqJFkLAg+34gi4A75Cd7tvEvjzFLgClGgrnjUSpXkDfJ4B18tJrU12yHsxbIdei5LzANjJSrQIrMp2lapWXelSaZS1aoi+u6jo62GtV/QVUEtbhEb4cU59BLZcHNJtZ5jArb8Fpi0HZAisUvCN8Lh47spHuKa5KxkCARe3tBSc2vYsgaBa8CTQb8LKvXs4hECpyv00v8gyMYQggzdoD34FOGST/wbBNwnZNhmoIu+LAAAAAElFTkSuQmCC" />
        </button>
      

    );
}

export default DropdownButton;
