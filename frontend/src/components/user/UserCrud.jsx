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
            setUsers({list: resp.data})
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
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" value={users.currentUser.name} id="name" onChange={updateField} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" value={users.currentUser.email} id="email" onChange={updateField} />
                    </div>
                </div>
                <div className="row">
                    <div className="button-group">
                        <button className="btn-save" onClick={save}>Salvar</button>
                        <button className="btn-cancel" onClick={clear}>Cancelar</button>
                    </div>
                </div>
            </form>
        )
    }

    return ( 
        <Main tipoContent="users">
            {renderForm()}
        </Main>
    );
}
 
export default UserCrud;