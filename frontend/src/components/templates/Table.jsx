import React from 'react';

import './Table.css';
const Table = ({columns, users, load, remove}) => {
    return ( 
        <table>
            <thead>
               <tr>
                   {columns.map( (column, index) => <td key={index} className={column.classe}>{column.name}</td>)}
               </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <button className="button btn-edit" onClick={() => load(user)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button className="button btn-delete" onClick={() => remove(user)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
     );
}
 
export default Table;