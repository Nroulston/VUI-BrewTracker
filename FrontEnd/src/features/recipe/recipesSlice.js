import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  recipes: []
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipeAdded(state, action) {
      state.recipes.push(action.payload)
    }
  },
  extraReducers: {
  }
})

export const selectRecipeById = (state, recipeId) => {
  state.recipes.recipes.find(recipe => recipe.id === recipeId)
}

export const { recipeAdded } = recipesSlice.actions

export default recipesSlice.reducer