import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteUser } from "../store/userReducer";

function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    
    function removeUser(id) {
        dispatch(deleteUser({
            id: id
        }))
    }

    return(
        <div className="container">
            <h2 className="mt-3">Crud App With JSON Server</h2>
            <Link to='/create' className="btn btn-success my-3">Create</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map((u, i) => (
                            <tr key={i}>
                                <td>{ u.id }</td>
                                <td>{ u.name }</td>
                                <td>{ u.email }</td>
                                <td>
                                    <Link to={`/update/${u.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeUser(u.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;