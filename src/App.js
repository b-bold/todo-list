import './App.css';
import { Login } from  "./components/Login"
import { Register } from "./components/Register"
import React, { useState } from 'react'
import { TodoList } from './components/Todo/TodoList';

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {/* {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      <TodoList/>
    </div>
  );
}

export default App;
