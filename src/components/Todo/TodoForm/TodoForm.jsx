import React, { useState } from "react"

export const TodoForm = () => {
   const [input, setInput] = useState('')

   const handleSubmit = (e) => {
        e.preventDefault();
   }


    return (
        <form className='todo-form-container' onSubmit={handleSubmit}> 
            <h2>Create a Todo</h2>
            <input 
                type='text' 
                placeholder='Add a Todo' 
                value={input} 
                name='text' 
                className='todo-input'
            />
            <div className='todo-button-container'>
                <button className='todo-button'>Add Todo</button>
                <button className='todo-cancel-button'>Cancel</button>
            </div>

        </form>
    )
}