import React, { useContext } from 'react';
import './DropdownMenu.css';
import { Context } from '../../Dropdown';

function DropdownMenu(props){
    const context = useContext(Context)

    return (
        <div>
            {context.isShown && <ul className="menu">
                {props.children}
            </ul>}
        </div>
    );
}

export default DropdownMenu;
