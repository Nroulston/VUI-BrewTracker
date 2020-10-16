import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {userLoggedIn} from './usersSlice'

import axios from 'axios'
export const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [errors, setErrors] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async() => {
  setErrors([])
    const user = {
      username,
      email,
      password
    }
  
   const response = await axios.post(`http://localhost:3001/login`, {user}, {withCredentials:true})
   if(response.data.errors) {
      setErrors(response.data.errors)
   } else { 
     dispatch(userLoggedIn(response.data.user))
     setPassword('')
     setUsername('')
     setEmail('')
     //Todo Redirect to main page
   }
  }

  return(
    <section>
      <h2>Login</h2>
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
          Login
        </button>
        <div>
            or <Link to='/signup'>sign up</Link>
        </div>
      </form>
    </section>
  )


}