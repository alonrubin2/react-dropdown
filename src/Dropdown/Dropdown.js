import React, { createContext } from 'react';
import './Dropdown.css';
import { useState } from 'react';
export const Context = createContext();

function Dropdown(props) {


    const [isShown, setIsShown] = useState(false);



    return (
        <Context.Provider value={{
            isShown,
            setIsShown
        }}>
            <div /*onClick={closeMenu}*/ className="dropdown">
                {props.children}
            </div>
        </Context.Provider>

    );
}

export default Dropdown;
