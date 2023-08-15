import React, { useState } from 'react'
import { TodoForm } from './TodoForm/TodoForm'

export const TodoList = (props) => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos) 
    }

    return (
        <div>
            <h1 className='todo-list-header'>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>

        </div>
    )
}