import React, { useState, Popup } from "react"
import { Login } from '../../Login'

export const TodoForm = (props) => {
    const [input, setInput] = useState('')


    return (
        <form className="todo-form">
            <input 
                className="todo-input" 
                type="text" 
                placeholder="add a todo" 
                value={input} 
                name="text" 
            />
            <button className="todo-button">Add To Do</button>
        </form>
        
    )
}

export default TodoForm;