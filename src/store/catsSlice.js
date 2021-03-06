import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async function (_, { dispatch, rejectWithValue }) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=100&page=3&order=asc`,
                {
                    headers: {
                        'x-api-key': 'e65ce818-54d7-4591-bcd9-2aaaadc05150',
                    }
                });
            if (!response.ok) {
                throw new Error('Server Error!!!');
            }
            const data = await response.json();
            return dispatch(setCats(data));
        }
        catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {
        setCats: (state, action) => {
            return {
                ...state,
                items: action.payload,
                isLoading: true,
            }
        },
    }
})

export const { setCats } = catsSlice.actions;
export const selectCats = state => state.cats.items;
export const selectIsLoading = state => state.cats.isLoading;
export default catsSlice.reducer;