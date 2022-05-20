import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/UserList/UserList';
import UserDescription from './components/UserDescription/UserDescription';
import axios from 'axios';

function App() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        }
        getUsers();
    }, [])
    
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UserList users={users} />} />
                    <Route path='/users/:id' element={<UserDescription />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;