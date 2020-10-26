import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  recipes: []
}
const localHost = 'http://localhost:3001'

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async() => {
  const response = await axios.get(`${localHost}/recipes`, {withCredentials: true})
  
  return response.data
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipeAdded(state, action) {
      state.recipes.push(action.payload)
    }
  },
  extraReducers: {
    [fetchRecipes.fulfilled]: (state, action) => {
      
      state.recipes = action.payload
    },
    [fetchRecipes.rejected]: (state, action) => {
     
    }
  }
})


   
  



export const { recipeAdded } = recipesSlice.actions

export default recipesSlice.reducer

//TODO Blog point - the selector needs to be in this exact format to work.
export const selectRecipeById = (state, recipeId) => 
  state.recipes.recipes.find(recipe => recipe.id ==recipeId)