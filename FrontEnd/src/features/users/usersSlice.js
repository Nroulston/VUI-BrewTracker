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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSignedUp(state, action) {
      state.currentUser = action.payload
      state.users.push(action.payload)
      state.isLoggedIn = true
    },
    userLoggedIn(state, action){
      state.currentUser= action.payload
      state.users.push(action.payload)
      state.isLoggedIn = true
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
  }
})

export const {userSignedUp, userLoggedIn} = usersSlice.actions
export default usersSlice.reducer