import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserDescription(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const handleClick = (event) => {
        navigate(`/`, { replace: true });
    }

    useEffect( () => {
        const fetchUser = async () => {
            setLoading(true);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setLoading(false);
            console.log(response.data);
            setUser(response.data);
        }
        fetchUser();
    }, [])

    return (
        <div className="user-description">
            <div className="user-description--back-btn">
                <Button size="large" onClick={handleClick}>⬅</Button>
            </div>
            {
                loading ? 
                <CircularProgress />
                :
                <div className="user-description--back-btn">
                    <div className="user--details">
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                    </div>
                </div>
            }
        </div>
    )
}


export default UserDescription;