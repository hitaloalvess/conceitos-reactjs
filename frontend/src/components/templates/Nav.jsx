import React from 'react';

import NavItem from './NavItem';

import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="menu">
            <NavItem tipo="home"/>
            <NavItem tipo="users"/>
        </nav>
     );
}
 
export default Nav;