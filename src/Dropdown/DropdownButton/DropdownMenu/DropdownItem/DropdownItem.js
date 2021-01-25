import React from 'react';
import './DropdownItem.css'

function DropdownItem(props){


    return (
        <a href={props.route + props.children}><li className="item">{props.children}</li></a>
    );
}

export default DropdownItem;
