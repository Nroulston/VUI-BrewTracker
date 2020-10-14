import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  status: 'idle'
}

const localHost = 'http://localhost:3001'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${localHost}/users`)
  return response.users
})
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    handleLogin(data) {

    } 
  },
  extraReducers: {
    
    
  }
})

export default usersSlice.reducer