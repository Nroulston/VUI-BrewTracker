import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  status: 'idle',
}

const localHost = 'http://localhost:3001'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${localHost}/users`, {withCredentials:true})

  
  return response.data.users

})

export const logUserIn = createAsyncThunk('users/login', async (userInfo) => {
  const response = await axios.post(`${localHost}/login`, {user: userInfo}, {withCredentials:true})
  debugger

  
  return response
  }
)

export const signUpUser = createAsyncThunk('users/signup', async (userInfo) => {
  
  const response = await axios.post(`${localHost}/users`, {user: userInfo}, {withCredentials:true})
  debugger
  return response
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSignedUp(state, action) {debugger
      state.currentUser = action.payload
      state.users.push(action.payload)
      state.isLoggedIn = true
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
  
    },
    [logUserIn.fulfilled]: (state, action) => {
     
      state.currentUser = action.payload.data
      
    },
  }
})

export const {userSignedUp} = usersSlice.actions
export default usersSlice.reducer