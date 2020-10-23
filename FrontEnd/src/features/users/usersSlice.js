import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false,
  status: 'idle',
}

const localHost = 'http://localhost:3001'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ( ) => {
  const response = await axios.get(`${localHost}/users`, {withCredentials:true})
  return response.data.users
})

export const checkLoginStatus = createAsyncThunk('users/logged_in', async ( arg, {rejectWithValue}) => {
  try{
    const response = await axios.get("http://localhost:3001/logged_in", { withCredentials: true })
    
    return response.data.user
  } catch(err) {
    return rejectWithValue(err.response.data)
  }
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
      
      state.isLoggedIn = true
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [checkLoginStatus.fulfilled]: (state,action) => {
     
      state.currentUser= action.payload
      state.users.push(action.payload)
      state.isLoggedIn = true
    },
    [checkLoginStatus.rejected]: (state, action) => {
      
    }
  }
})

export const {userSignedUp, userLoggedIn} = usersSlice.actions
export default usersSlice.reducer