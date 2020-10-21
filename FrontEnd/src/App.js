import React, { useEffect } from 'react';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {fetchUsers, checkLoginStatus} from './features/users/usersSlice'
import { fetchRecipes } from './features/recipe/recipesSlice'
import './App.css';

import {useDispatch } from 'react-redux'

import Home from './app/Home'
import {Login} from './features/users/Login'
import {Signup} from './features/users/Signup'
import {AddRecipeForm} from './features/recipe/AddRecipeForm'
import {ShowRecipe} from './features/recipe/ShowRecipe'
import {Brewlog} from './features/brewlog/Brewlog'
import {Dictaphone} from './features/dictaphone/Dictaphone'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(checkLoginStatus())
    dispatch(fetchRecipes())
 
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/recipes/new' component={AddRecipeForm}/>
              <Route exact path='/recipes/:recipeId' component={ShowRecipe}/>
              <Route exact path='/brewlog' component={Brewlog} />
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
