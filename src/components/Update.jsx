import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/userReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const currentUser = users.filter(f => Number(f.id) === Number(id));
    const { name, email } = currentUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleNameChange(event) {
        setName(event.target.value);
    };
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    };
    
    function handleUpdate(e) {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Edit User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={uname} placeholder="enter Name" className='form-control' 
                        onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={uemail} placeholder="enter Email" className='form-control' 
                        onChange={handleEmailChange}/>
                    </div><br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update
