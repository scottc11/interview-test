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
        <div className="user-container">
            <div className="user-container--back-btn">
                <Button size="large" onClick={handleClick}>⬅</Button>
            </div>
            {
                loading ? 
                <CircularProgress />
                :
                <div className="user-container--back-btn">
                    <div className="user-container--details">
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>{user.company.name}</td>
                            </tr>
                            <tr>
                                <td>Website:</td>
                                <td>{user.website}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}


export default UserDescription;