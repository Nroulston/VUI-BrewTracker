import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import recipesReducer from '../features/recipe/recipesSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    recipes: recipesReducer
  },
});
