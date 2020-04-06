//use the same component to change the font size
//change the text color of the header
//change the onMouseOver for the header

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
    style={{backgroundColor:color}}
    className="header_box"
    onMouseOver={onMouseOver}
    font={fontSize}
    >
    <h1 className="header_text">Header</h1>
</div>;

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color:'#000',
    onMouseOver:MouseOver
}

export default Header;