import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  brewlogs: []
}
const localHost = 'http://localhost:3001'

export const fetchBrewlogs = createAsyncThunk('brewlogs/fetchBrewlogs', async() => {
  const response = await axios.get(`${localHost}/brewlogs`, {withCredentials:true})
  return response.data.brewlogs
})

const brewlogsSlice = createSlice({
  name: 'brewlogs',
  initialState,
  reducers: {
    brewlogAdded(state, action) {
      state.brewlogs.push(action.payload)
    }
  },
  extraReducers:{
    [fetchBrewlogs.fulfilled]: (state, action) => { state.brewlogs = action.payload}
  }
})

export const { brewlogAdded } = brewlogsSlice.actions

export default brewlogsSlice.reducer

export const selectBrewlogById = (state, brewlogId) => 
  state.brewlogs.brewlogs.find(brewlog => brewlog.id == brewlogId)