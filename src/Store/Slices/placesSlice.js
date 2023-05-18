import { createSlice } from '@reduxjs/toolkit'

export const placesSlice = createSlice({

    name: 'places',

    initialState: {
        places: [],        
        isLoading: false,
        errorMessage: undefined
    },

    reducers: {

        onIsLoading: (state, { payload }) => {

            state.isLoading = true;
        },
       
        onLoad: (state, { payload }) => {

            state.places = payload;
            state.errorMessage = {};
            state.isLoading = false;
        },

        onError: (state, { payload }) => {

            state.places = [];
            state.errorMessage = payload;
            state.isLoading = false;
        }
    }
})

export const { onLoad, onError, onIsLoading } = placesSlice.actions;