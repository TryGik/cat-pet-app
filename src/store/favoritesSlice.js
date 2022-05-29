import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
    },
    reducers: {
        setFavorites: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        },
        removeFavorites: (state, action) => {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        }
    }
})

export const { setFavorites, removeFavorites } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites.items;
export default favoritesSlice.reducer;