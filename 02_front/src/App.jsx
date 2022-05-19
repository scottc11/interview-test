import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/UserList/UserList';
import UserDescription from './components/UserDescription/UserDescription';
import axios from 'axios';

const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    return response.data;
}

function App() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const users = getUsers();
        console.log(users);
        setUsers(users);
    }, [])
    
    return (
        <BrowserRouter>
            <div className='flex h-screen'>
                <Routes>
                    <Route path='/' element={<UserList />} />
                    <Route path='/users/1/' element={<UserDescription />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;