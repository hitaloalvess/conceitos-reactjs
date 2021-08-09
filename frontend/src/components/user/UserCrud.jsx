import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Main from '../templates/Main';
import Table from '../templates/Table';
import Form from '../templates/Form';

const baseUrl = `http://localhost:3001/users`;
const columns = [{classe:'t-medium', name:''},
                     {classe:'t-small', name:'ID'},
                     {classe:'t-large', name:'Nome'},
                     {classe:'t-large', name:'E-mail'}];

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

    // AJEITAR O PADDING NO MOBILE 320PX - E REFATORAR USERCRUD

    return ( 
        <Main tipoContent="users">
            <Form buttons={{updateField, save, clear}} users={users}/>
            <Table users={users.list} columns={columns} load={load} remove={remove} />
        </Main>
    );
}
 
export default UserCrud;