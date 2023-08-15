import React, { useState } from "react"
import { TodoList } from "./Todo/TodoList";

export const Login = (props) => {
    const [username, setUsername] = useState(''); 
    const [pass, setPass] = useState('');
    const [goTodoPage, setGoTodoPage] = useState(false)

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value)
        } 

        if (event.target.name === 'password') {
            setPass(event.target.value)
        }
    }

    // TODO 3: once user info is saved, i want to hit the API and check the result
    const fetchResponse = async () => {
        const userInfo = {
            "username": username,
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
        setGoTodoPage(true)
    }

    const formSwitch = () => {
        props.onFormSwitch('register')
    }
    
    return (
        <div>
            {(goTodoPage) ? 
                <TodoList /> 
        : 
                <div className="auth-form-container">
                    <h2> Login </h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input value={username} name="username" required placeholder="username" onChange={handleInputChange} />
                        <input value={pass} type="password" required placeholder="enter password" name="password" onChange={handleInputChange} />
                        <button className='login-btn' onClick={fetchResponse}>Log In</button>
                    </form>
                    <button className='register-btn' onClick={formSwitch}>Register Here </button>
                </div>
            }
        </div>
    )
}