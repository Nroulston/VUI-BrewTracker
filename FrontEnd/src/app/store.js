import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import recipesReducer from '../features/recipe/recipesSlice'
import brewlogsReducer from '../features/brewlog/brewlogSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    recipes: recipesReducer,
    brewlogs: brewlogsReducer
  },
});
