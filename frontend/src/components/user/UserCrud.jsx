import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Main from '../templates/Main';

import './UserCrud.css';

const baseUrl = `http://localhost:3001/users`;

const UserCrud = () => {


    const [users, setUsers] = useState({
        currentUser:{name:'', email:''},
        list:[]
    });

    useEffect(() => {
        const fetchUsers = async() => {
            const resp = await axios(baseUrl)
            setUsers({
                currentUser:{name:'', email:''},
                list: resp.data})
        };

        fetchUsers();
    },[])

    const clear = () => {
        setUsers({ currentUser: {name: '', email: ''} })
    }

    const getUpdateListUsers = (newUser) => {
        const list = users.list.filter( user => newUser.id !== user.id );
        list.unshift(newUser)

        return list;
    }

    const save = async() => {
        const user = users.currentUser;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl;

        const resp = await axios[method](url, user);
        const listUsers = getUpdateListUsers(resp.data);

        this.setUsers({
            currentUser:{name:'', email: ''},
            listUsers
        });

    }

    const updateField = (e) => {
        const currentUser = {...users.currentUser};
        currentUser[e.target.name] = e.target.value;

        setUsers({currentUser});
    }

    const renderForm = () => {
        return (
            <form action="#">
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="name" value={users.currentUser.name} id="nome" onChange={updateField} placeholder="Digite o nome.." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" value={users.currentUser.email} id="email" onChange={updateField} placeholder="Digite o e-mail.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="button-group">
                        <button className="button btn-save" onClick={save}>Salvar</button>
                        <button className="button btn-cancel" onClick={clear}>Cancelar</button>
                    </div>
                </div>
            </form>
        )
    }

    const renderRows = () => {
        return users.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn-edit">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn-delete">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    const renderTable = () => {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
                {renderRows()}           
            </table>
        )
    }

    return ( 
        <Main tipoContent="users">
            {renderForm()}
            {/* <hr /> */}
            {renderTable()}
        </Main>
    );
}
 
export default UserCrud;