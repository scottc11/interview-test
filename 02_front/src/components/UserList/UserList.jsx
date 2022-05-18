import React from "react";
import { Link } from "react-router-dom";

function UserList(props) {
    return (
        <div>
            user list
            <Link to="/users/1">go to user</Link>
        </div>
    )
}


export default UserList;