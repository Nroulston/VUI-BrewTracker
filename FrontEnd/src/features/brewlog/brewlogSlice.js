import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  brewlogs: []
}

const brewlogsSlice = createSlice({
  name: 'brewlogs',
  initialState,
  reducers: {
    brewlogAdded(state, action) {
      state.brewlogs.push(action.payload)
    }
  },
  extraReducers:{}
})

export const { brewlogAdded } = brewlogsSlice.actions

export default brewlogsSlice.reducer