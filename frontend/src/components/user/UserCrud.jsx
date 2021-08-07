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
        setUsers({ currentUser: {name: '', email: ''}, list:users.list })
    }

    const getUpdateListUsers = (newUser) => {
        const list = users.list.filter( user => newUser.id !== user.id );
        list.unshift(newUser)

        return list;
    }

    const save = async(e) => {
        
        e.preventDefault()

        const user = users.currentUser;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl;

        const resp = await axios[method](url, user);
        const listUsers = getUpdateListUsers(resp.data);

        setUsers({
            currentUser:{name:'', email: ''},
            list:listUsers
        });

    }

    const remove = async(userToDelete) => {
        await  axios.delete(`${baseUrl}/${userToDelete.id}`);

        const list = users.list.filter(user => user !== userToDelete);
        setUsers({currentUser:users.currentUser, list});
    }

    const load = (user) => {
        setUsers({currentUser:user, list:users.list})
    }

    const updateField = (e) => {
        const currentUser = {...users.currentUser};
        currentUser[e.target.name] = e.target.value;

        setUsers({currentUser, list:users.list});
    }

    const renderForm = () => {
        return (
            <form >
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

    const renderTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="t-medium"></th>
                        <th className="t-small">ID</th>
                        <th className="t-large">Nome</th>
                        <th className="t-large">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}           
                </tbody>
            </table>
        )
    }
    // AJEITAR O PADDING NO MOBILE 320PX - E REFATORAR USERCRUD

    return ( 
        <Main tipoContent="users">
            {renderForm()}
            {renderTable()}
        </Main>
    );
}
 
export default UserCrud;