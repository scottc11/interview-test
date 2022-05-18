import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/UserList/UserList';
import UserDescription from './components/UserDescription/UserDescription';

function App() {

    const [users, setUsers] = useState({})
    useEffect(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data);
    }, [])
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UserList />}/>
                <Route path='/users/1/' element={<UserDescription />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;