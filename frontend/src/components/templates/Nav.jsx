import React from 'react';

import NavItem from './NavItem';

import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="menu">
            <ul>
                <NavItem tipo="home"/>
                <NavItem tipo="users"/>
            </ul>
        </nav>
     );
}
 
export default Nav;