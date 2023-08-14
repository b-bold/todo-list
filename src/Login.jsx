import React, { useState, useEffect } from "react"
import { Welcome } from './Welcome'

// import "./Form.css"

export const Login = (props) => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [goToWelcomePage, setGoToWelcomePage] = useState(false)

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value)
        } 
        
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

    // TODO 3: once user info is saved, i want to hit the API and check the result
    const fetchResponse = async () => {
        const userInfo = {
            "email": email,
            "password": pass
        }
        
        const result = await fetch('https://dummyjson.com/auth/login', {
            // mode: 'no-cors',
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
    
        const resultInJson = await result.json()
        console.log(resultInJson)
    }     

    // TODO 2: test that a user can login by changing code here. 
        // change code so that once the email and password are saved and you press login,
        // i hit the endpoint, get the result and either go to the welcome page or pass the error to the client side. 
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
                            placeholder="enter email" 
                            name="email" 
                            onChange={handleInputChange} 
                        />

                        {error && pass.length <= 0 ? 
                            <label htmlFor="password">Password cannot be empty </label> : ''}
                         <input 
                            value={pass} 
                            type="password" 
                            placeholder="enter password" 
                            name="password" 
                            onChange={handleInputChange} 
                         />

                        <button className='login-btn' disabled={!email} onClick={fetchResponse}>Log In</button>
                    </form>

                    <button className='register-btn' onClick={formSwitch}>Register Here </button>
                </div>}
        </div>
    )
}