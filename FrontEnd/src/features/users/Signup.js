import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {userSignedUp} from './usersSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios'

export const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch()
 

  const handleSubmit = async() => {
    setErrors([])
    const user = {
      username,
      email,
      password
    }
    
   const response = await axios.post(`http://localhost:3001/users`, {user}, {withCredentials:true})
   if(response.data.errors) {
      setErrors(response.data.errors)
   } else {
     dispatch(userSignedUp(response.data.user))
     setPassword('')
     setUsername('')
     setEmail('')
     //Todo Redirect to main page
   }
  }



  return(
    <section>
      <h2>Signup</h2>
      <form>
        {errors.length > 0 &&
          <h2>
            {errors[0]}
          </h2>  
          }
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