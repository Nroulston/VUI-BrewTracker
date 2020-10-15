import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {signUpUser} from './usersSlice'
import { unwrapResult } from '@reduxjs/toolkit';


export const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [errors, setErrors] = useState('')

  const dispatch = useDispatch()
 

  const handleSubmit = async() => {
    
    try {
      const resultAction = await dispatch(
        signUpUser({username, email, password})
      )
      unwrapResult(resultAction)
    } catch (err) {
      console.log(err)
    }

  }

  return(
    <section>
      <h2>Signup</h2>
      <form>
        <label htmlFor="userName">Username:</label>
        <input 
          type="text" 
          name="userName" 
          id="userName"
          value={username}
          onChange={ e => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          name="email" 
          id="email"
          value={email}
          onChange={ e => setEmail(e.target.value)}  
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          value={password}
          onChange={ e => setPassword(e.target.value)}    
        />
        <button type='button' onClick={handleSubmit}>
          SignUp
        </button>
        <div>
            or <Link to='/login'>Login</Link>
        </div>
      </form>
    </section>
  )


}