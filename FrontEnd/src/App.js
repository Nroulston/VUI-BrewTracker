import React, { useEffect } from 'react';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {fetchUsers, checkLoginStatus} from './features/users/usersSlice'
import './App.css';
import {useSelector, useDispatch } from 'react-redux'
import Home from './app/Home'
import {Login} from './features/users/Login'
import {Signup} from './features/users/Signup'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(checkLoginStatus())
  })

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
