import React, { useState } from "react"
import { Welcome } from './Welcome'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [error, setError] = useState(false);
    const [goToWelcomePage, setGoToWelcomePage] = useState(false)

    const handleInputChange = (event) => {
        if (event.target.name === 'name'){
            setName(event.target.value)
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

        // BUG: my logic is off here 
        if (name.length === 0) {
            setError(true)
        } else if (pass.length === 0) {
            setError(true)
        } else if (age.length === 0) {
            setError(true)
        } else if (age.length === 0) {
            setError(true)
        } else if (email.length === 0) {
            setError(true)
        }
        

        // if ((name.length === 0 && pass.length === 0 && age.length === 0) && (email.length === 0 && email.length === 0)) {
        //     setError(false)
        //     console.log(1)
        // } else if (name.length === 0) {
        //     setError(true)
        //     console.log(2)
        // } else if (age.length === 0) {
        //     setError(true)
        //     console.log(4)
        // } else if (age.length === 0) {
        //     setError(true)
        //     console.log(5)
        // } else if (email.length === 0) {
        //     setError(true)
        //     console.log(6)
        // }

   
    }

    // TODO 1: once user info is saved, i want to hit the API and check the result
    const fetchResponse = async () => {
        const userInfo = {
        //     "firstName": firstName,
        //     "lastName": lastName,
        //     "emaiL": email,
        //     "username": username,
        //     "age": age
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
        console.log('handleSubmitError:', error)
        if (error) {
            return setGoToWelcomePage(false)
        } else {
            setGoToWelcomePage(true)
        }
    }

    const formSwitch = () => {
        props.onFormSwitch('login')
    }

    return (
        <div>
            {(goToWelcomePage) ?
                <Welcome />
            : 
                <div className="auth-form-container"> 
                    <h2> Register </h2>  
                    <form className="register-form" onSubmit={handleSubmit}>
                        {error && name.length <= 0 ? 
                            <label>Full Name cannot be empty</label> : ''}
                            <input value={name} name="name" id="id" placeholder="full name" onChange={handleInputChange} />
                        
                        {error && email.length <= 0 ? 
                            <label htmlFor="email">Email cannot be empty</label> : ''}
                            <input value={email} type="email" placeholder="youremail@gmail.com" name="email" onChange={handleInputChange} />
                        
                        {error && pass.length <= 0 ? 
                            <label htmlFor="password">Password cannot be empty</label> : '' }
                            <input value={pass} type="password" placeholder="*****" name="password" onChange={handleInputChange} />
                        
                        {error && age.length <= 0 ? 
                            <label htmlFor="age">Age cannot be empty</label> : '' }
                            <input value={age} type="age" placeholder="*****" name="age" onChange={handleInputChange} />
                        
                        <button className='login-btn'>Log In</button>
                    </form>
                    <button className='register-btn' onClick={formSwitch}>Login Here </button>
                </div>
            }
        </div>
    )
}