import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  currentUser: {},
  isLoggedIn: false
}

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