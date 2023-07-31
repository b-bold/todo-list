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
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full Name </label>
                <input value={name} name="name" id="id" placeholder="full name" />
                <label htmlFor="email">email </label>
                <input value={email} type="email" placeholder="youremail@gmail.com" name="email" />
                <label htmlFor="password">password </label>
                <input value={pass} type="password" placeholder="*****" name="password" />
                <button>Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Login Here </button>
        </div>
    )
}