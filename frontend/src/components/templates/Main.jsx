import React from 'react';

import Header from './Header';

import './Main.css';

const Main = () => {
    return ( 
        <>
           <Header /> 
           <main className="content">
               Conteúdo
           </main>
        </> 
    );
}
 
export default Main;
