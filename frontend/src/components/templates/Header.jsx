import React from 'react';

import Logo from './Logo';
import Nav from './Nav';

import './Header.css';
import MenuToggle from './MenuToggle';

const Header = () => {
    return ( 
                <header className='header'>
                    <div className="container">
                        <Logo />
                        <MenuToggle /> 
                        <Nav />
                    </div>
                </header>
     );
}
 
export default Header;