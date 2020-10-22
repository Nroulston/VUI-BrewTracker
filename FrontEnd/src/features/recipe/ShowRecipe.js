import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {selectRecipeById} from './recipesSlice'
import axios from 'axios'

import RecipeStatsShow from './ingredients/RecipeStatsShow'



export const ShowRecipe = ({match}) => {
  const { recipeId } = match.params
  
  const recipe = useSelector( state => selectRecipeById(state, recipeId))
  
  if(!recipe) {
    return (
      <section>


        <h2>Post not found!</h2>
      </section>
    )
  }

  return(
    <section>
      <article>
        <h2>{recipe.name}</h2>
        <RecipeStatsShow recipe={recipe} />
      </article>
      
    </section>
    
  )
}