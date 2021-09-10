import React from 'react';

function Navbar() {
    return (
        <nav>
            <input type = 'checkbox' className = 'menu-btn' id = 'menu-btn' />
            <label className = 'menu-icon' for = 'menu-btn'>
                <span className = 'nav-icon'></span>
            </label>
            <ul className = 'menu'>
                
            </ul>
        </nav>
    )
}

export default Navbar;
