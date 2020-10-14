import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {fetchUsers} from './features/users/usersSlice'
import './App.css';
import {useSelector, useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
