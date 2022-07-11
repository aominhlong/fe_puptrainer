import React, { useState } from 'react'
import './login.css'

const Login = ({loginUser}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')



    return (
        <div>
            <h1 className='title'>Welcome to PupTrainer</h1>
        <div className='login-page'>
            <div className='input-container'>
                <p>Please login</p>
                <input
                className='input'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />  
                <input
                className='input'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />       
                <button onClick={() => loginUser(username, email)}className='button'>Login</button>  
            </div>
        </div>
        </div>
    )
}
export default Login