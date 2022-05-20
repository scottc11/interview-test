import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";


function UserList(props) {
    console.log(props.users);
    const columns = props.users[0] ? Object.keys(props.users[0]) : [];

    return (
        <div>
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
                                <tr>
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
            <Link to="/users/1">go to user</Link>
        </div>
    )
}


export default UserList;