import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  status: 'idle',
  error: 'null'
}

const localHost = 'http://localhost:3001'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${localHost}/users`)

  
  return response.data.users

})

export const logUserIn = createAsyncThunk('users/login', async (userInfo) => {
  const response = await axios.post(`${localHost}/login`, {user: userInfo})

  return response.user
  }
)

export const signUpUser = createAsyncThunk('users/signup', async (userInfo) => {
  
  const response = await axios.post(`${localHost}/users`, {user: userInfo})
  debugger
  return response
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
 
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
  
    },
    [logUserIn.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [signUpUser.fulfilled]: (state,action) => {
      
      state.currentUser = action.payload.data.user
      state.users.push(action.payload.data.user)
    },
    [signUpUser.rejected]: (state, action) => {
      state.error = action.error.message
    }
    
  }
})


export default usersSlice.reducer