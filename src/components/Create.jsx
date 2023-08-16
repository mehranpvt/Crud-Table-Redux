import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addUser({
            id: users[users.length - 1].id + 1, 
            name, 
            email 
        }));
        navigate('/')
    }
    
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="enter Name" className='form-control' 
                    onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="enter Email" className='form-control' 
                    onChange={e => setEmail(e.target.value)}/>
                </div><br />
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create