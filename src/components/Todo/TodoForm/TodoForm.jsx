import React, { useState, Popup } from "react"
import { Login } from '../../Login'

export const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            title: input
        })

        setInput('');
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                className="todo-input" 
                type="text" 
                placeholder="add a todo" 
                value={input} 
                name="text"
                onChange={handleChange}
            />
            <button className="todo-button">Add To Do</button>
        </form>
        
    )
}

export default TodoForm;