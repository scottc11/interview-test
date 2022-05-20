import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


function UserList(props) {
    console.log(props.users);
    const columns = props.users[0] ? Object.keys(props.users[0]) : [];
    const navigate = useNavigate();
    const handleClick = (event, id) => {
        navigate(`/users/${id}`, { replace: true });
    }
    
    return (
        <div className="user-list">
            <table className="table">
                <thead>
                    <tr>
                        {
                            columns.map( col => <td key={col}>{col}</td> )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user) => {
                            return (
                                <tr onClick={(e) => handleClick(e, user.id)}>
                                    {
                                        columns.map(col => {
                                            if (typeof user[col] === 'string' || typeof user[col] === 'number') {
                                                return <td>{user[col]}</td>
                                            } else if (user[col] instanceof Object) {
                                                return <td></td>
                                            } else {
                                                return <td></td>
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default UserList;