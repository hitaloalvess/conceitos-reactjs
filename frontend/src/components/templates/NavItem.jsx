import React from 'react';
import {Link} from 'react-router-dom'

import './NavItem.css';
const NavItem = ({tipo}) => {

    const primeiraLetraMaiscula = (tipo) => {
        const caracteres = [...tipo];
        caracteres[0] = caracteres[0].toUpperCase();

        return caracteres.join('');
    }

    return ( 
        <li>
            <Link to={`/${tipo}`} className="menu-item">
                {primeiraLetraMaiscula(tipo)}
            </Link>
           
        </li>
     );
}
 
export default NavItem;