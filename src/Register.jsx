import React, { ChangeEvent, useState } from "react"
import { Welcome } from './Welcome'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [error, setError] = useState(false);
    const [page, setPage] = useState(false)

    const handleInputChange = (event) => {
        // does this code work? yes
        // does this code seem ugly? also yes.
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
        } else {
            setError(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (error) {
            return setPage(false)
        } else {
            setPage(true)
        }
    }

    return (
        <div>
            {!page &&
                <div className="auth-form-container"> 
                    <h2> Register </h2>  
                    <form className="register-form" onSubmit={handleSubmit}>
                        {error && name.length <= 0 ? 
                            <label>Full Name cannot be empty</label> : ''}
                            <input value={name} name="name" id="id" placeholder="full name" onChange={handleInputChange} />
                        
                        {error && email.length <= 0 ? 
                            <label htmlFor="email">Email </label> : ''}
                            <input value={email} type="email" placeholder="youremail@gmail.com" name="email" onChange={handleInputChange} />
                        
                        {error && pass.length <= 0 ? 
                            <label htmlFor="password">Password cannot be empty</label> : '' }
                            <input value={pass} type="password" placeholder="*****" name="password" onChange={handleInputChange} />
                        
                        {error && age.length <= 0 ? 
                            <label htmlFor="age">Age </label> : '' }
                            <input value={age} type="age" placeholder="*****" name="age" onChange={handleInputChange} />
                        
                        <button className='login-btn'>Log In</button>
                    </form>
                    <button className='register-btn' onClick={() => props.onFormSwitch('login')}>Login Here </button>
                </div>
            }

            {page && <Welcome />}
        </div>
    )
}