import React, { useState, Popup } from "react"
import { Login } from '../../Login'

export const TodoForm = (props) => {
    const [input, setInput] = useState('')
    const [goLoginPage, setGoLoginPage] = useState(false)
    const [priority, setPriority] = useState('high')


    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
   
    const handleCancel = (e) => {
        e.preventDefault();
       console.log('this will take you back to the login page for now');
       setGoLoginPage(true)
   }

    const handleAddTodo = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            priority: priority
        })
        setInput('')
    }


    return (
        <div> 
            {(goLoginPage) ? 
                <Login />
            
        : 
            <form className='todo-form-container'> 
                <h2>Create a Todo</h2>
                <input 
                    type='text' 
                    placeholder='Add a Todo' 
                    value={input} 
                    name='input' 
                    className='todo-input'
                    onChange={handleInputChange}
                    required 
                />
                <div className='todo-button-container'>
                    <button className='todo-button' onClick={handleAddTodo} >Add Todo</button>
                    <button className='todo-cancel-button'onClick={handleCancel}>Cancel</button>
                </div>
            </form>
            }
        </div>
        
    )
}