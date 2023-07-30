import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="email">email </label>
                <input value={email} type="email" placeholder="youremail@gmail.com" name="email"/>
                <label for="password">password </label>
                <input value={pass} type="password" placeholder="*****" name="password" />
                <button>Log In</button>
            </form>   
            <button> Already have an account? Register Here </button>
        </>
            )
}