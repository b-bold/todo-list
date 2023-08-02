import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container"> 
            <h2> Register </h2>  
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full Name </label>
                <input value={name} name="name" id="id" placeholder="full name" />
                <label htmlFor="email">Email </label>
                <input value={email} type="email" placeholder="youremail@gmail.com" name="email" />
                <label htmlFor="password">Password </label>
                <input value={pass} type="password" placeholder="*****" name="password" />
                <button className='login-btn'>Log In</button>
            </form>
            <button className='register-btn' onClick={() => props.onFormSwitch('login')}>Login Here </button>
        </div>
    )
}