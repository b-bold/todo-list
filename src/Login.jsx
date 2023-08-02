import React, { useState } from "react"
import { Welcome } from './Welcome'

export const Login = (props) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');
    const [page, setPage] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setPage(true);
    // setPass()
    // setEmail()
    }
    
    return (
        <div>
            {!page && 
                <div className="auth-form-container">
                    <h2> Login </h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email </label>
                        <input value={email} type="email" placeholder="youremail@gmail.com" name="email"/>
                        <label htmlFor="password">Password </label>
                        <input value={pass} type="password" placeholder="*****" name="password" />
                        <button className='login-btn'>Log In</button>
                    </form>   
                    <button className='register-btn' onClick={() => props.onFormSwitch('register')}>Register Here </button>
                </div>
            }   
            {page && <Welcome />}
        </div>
    )
}