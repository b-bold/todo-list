import logo from './logo.svg';
import './App.css';
import { Login } from  "./Login"
import { Register } from "./Register"
import React, { useState } from 'react'

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login/> : <Register/>
      }
    </div>
  );
}

export default App;
