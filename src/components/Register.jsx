import React, { useState } from "react"
import TodoList from "./Todo/TodoList";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [goTodoPage, setGoTodoPage] = useState(false)



    const handleInputChange = (event) => {
        if (event.target.name === 'firstName'){
            setFirstName(event.target.value)
        } 
       
        if (event.target.name === 'lastName') {
            setLastName(event.target.value)
        } 
       
        if (event.target.name === 'username') {
            setUsername(event.target.value)
        } 
        
        if (event.target.name === 'email'){
            setEmail(event.target.value)
        }
        
        if (event.target.name === 'password'){
            setPass(event.target.value) 
        } 
        
        if (event.target.name === 'age'){
            setAge(event.target.value)
        }
    }

    // TODO: once user info is saved, 
    // i want to hit the API and check the result
    const fetchResponse = async () => {
        const userInfo = {
            // "firstName": firstName,
            // "lastName": lastName,
            // "emaiL": email,
            // "username": username,
            // "age": age,
            // "pass": pass
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
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setGoTodoPage(true)
    }

    const formSwitch = () => {
        props.onFormSwitch('login')
    }

    return (
        <div>
            {(goTodoPage) ?
                <TodoList />
            : 
                <div className="auth-form-container"> 
                    <h2> Register </h2>  
                    <form className="register-form" onSubmit={handleSubmit}>
                        <input value={firstName} type="text" required name="firstName" id="1" placeholder="first name" onChange={handleInputChange} />
                        <input value={lastName} name="lastName" required id="2" placeholder="last name" onChange={handleInputChange} />
                        <input value={username} name="username" required id="3" placeholder="username" onChange={handleInputChange} />
                        <input value={email} type="email" required placeholder="youremail@gmail.com" name="email" onChange={handleInputChange} />
                        <input value={pass} type="password" required placeholder="password" name="password" onChange={handleInputChange} />
                        <input value={age} type="age" required placeholder="age" name="age" onChange={handleInputChange} />
                        <button className='login-btn'>Log In</button>
                    </form>
                    <button className='register-btn' onClick={formSwitch}>Login Here </button>
                </div>
            }
        </div>
    )
}