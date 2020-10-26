import React, { useEffect } from 'react';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {fetchUsers, checkLoginStatus} from './features/users/usersSlice'
import { fetchRecipes } from './features/recipe/recipesSlice'
import { fetchBrewlogs } from './features/brewlog/brewlogSlice'
import {useDispatch } from 'react-redux'
import Home from './app/Home'
import {Login} from './features/users/Login'
import {Signup} from './features/users/Signup'
import {ShowRecipe} from './features/recipe/ShowRecipe'
import {RecipeFormContainer} from './features/recipe/RecipeFormContainer'
import {RecipeIndex} from './features/recipe/RecipeIndex'
import { ShowBrewlog } from './features/brewlog/ShowBrewlog';
import ScrollToTop from './app/ScrollToTop'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(checkLoginStatus())
    dispatch(fetchRecipes())
    dispatch(fetchBrewlogs())
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <>
        
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/recipes/new' component={RecipeFormContainer}/>
              <Route exact path='/recipes' component={RecipeIndex}/>
              <Route exact path='/recipes/:recipeId' component={ShowRecipe}/>
              <Route exact path='/recipes/:recipeId/brewlogs/:brewlogId' component={ShowBrewlog} />
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        </>
      </header>
    </div>
  );
}

export default App;
