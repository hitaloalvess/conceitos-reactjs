import React from 'react';

import './NavItem.css';
const NavItem = ({tipo}) => {

    const primeiraLetraMaiscula = (tipo) => {
        const caracteres = [...tipo];
        caracteres[0] = caracteres[0].toUpperCase();

        return caracteres.join('');
    }

    return ( 
        <>
            <a href={`#/${tipo}`} className="menu-item">
            {primeiraLetraMaiscula(tipo)}
                <div className="sublinhar"></div>
            </a>
           
        </>
     );
}
 
export default NavItem;