import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';
import catsReducer from './catsSlice'

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
        cats: catsReducer,
    },
})