import React from 'react';

import './MenuToggle.css';

const MenuToggle = () => {

    const menuToggle = document.querySelector('.menu-toggle');

    const activateMenu = (e) => {
       menuToggle.classList.toggle('active')
    }

    return ( 
        <div className="menu-toggle" onClick={activateMenu}>
            <div className="line"></div>
        </div>
     );

}
 
export default MenuToggle;