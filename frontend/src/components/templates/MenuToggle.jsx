import React from 'react';

import './MenuToggle.css';

const MenuToggle = () => {


    const activateMenu = (e) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.menu');

       menuToggle.classList.toggle('active');
       navMenu.classList.toggle('active');
    }

    return ( 
        <div className="menu-toggle" onClick={activateMenu}>
            <div className="line"></div>
        </div>
     );

}
 
export default MenuToggle;