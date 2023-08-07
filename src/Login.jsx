import React, { useState } from "react"
import { Welcome } from './Welcome'
// import "./Form.css"

export const Login = (props) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');
    const [error, setError] = useState(false);
    const [goToWelcomePage, setGoToWelcomePage] = useState(false)

    const handleInputChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }

        if (event.target.name === 'password') {
            setPass(event.target.value)
        }

        if (email.length === 0 || pass.length === 0) {
            setError(true)   
        } else {
            setError(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (error) {
            return setGoToWelcomePage(false)
        } else {
            setGoToWelcomePage(true)
        }
    }

    const formSwitch = () => {
        props.onFormSwitch('register')
    }
    
    return (
        <div>
            {(goToWelcomePage) ? 
                <Welcome /> 
        : 
                <div className="auth-form-container">
                    <h2> Login </h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        {error && email.length <= 0 ? 
                            <label htmlFor="email"> Email cannot be empty </label> : ''}
                        <input 
                            value={email} 
                            type="email" 
                            placeholder="youremail@gmail.com" 
                            name="email" 
                            onChange={handleInputChange} 
                        />

                        {error && pass.length <= 0 ? 
                            <label htmlFor="password">Password cannot be empty </label> : ''}
                         <input 
                            value={pass} 
                            type="password" 
                            placeholder="*****" 
                            name="password" 
                            onChange={handleInputChange} 
                         />

                        <button className='login-btn' disabled={(!email)}>Log In</button>
                    </form>

                    <button className='register-btn' onClick={formSwitch}>Register Here </button>
                </div>}
        </div>
    )
}