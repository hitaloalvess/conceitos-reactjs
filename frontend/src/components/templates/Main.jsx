import React from 'react';

import './Main.css';

const Main = ({children, tipoContent}) => {
    return ( 
        <>
           <main className="container">
                <div className={`content ${tipoContent}`}>
                    {children}
                </div>
           </main>
        </> 
    );
}
 
export default Main;
