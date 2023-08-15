import React, { useState, Popup } from "react"
import { Login } from '../../Login'

export const TodoForm = () => {
   const [input, setInput] = useState('')
    const [goLoginPage, setGoLoginPage] = useState(false)

   const handleSubmit = (e) => {
        e.preventDefault();
       console.log('this will take you back to the login page for now');
       setGoLoginPage(true)
        //TODO: create a new todo 
   }

    const handleInputChange = (event) => {
        if (event.target.name === 'input') {
            setInput(event.target.value)
        } 
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log('In the future, this will create a new todo and render a new component reflecting that')
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
                    <button className='todo-cancel-button'onClick={handleSubmit}>Cancel</button>
                </div>
            </form>
            }
        </div>
        
    )
}