import { createSlice } from '@reduxjs/toolkit'

export const placesSlice = createSlice({

    name: 'places',

    initialState: {

        places: [],
        restaurants: [],
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

        onLoadRestaurants: (state, { payload }) => {

            state.restaurants = payload;
            state.errorMessage = {};
            state.isLoading = false;
        },

        onError: (state, { payload }) => {

            state.places = [];
            state.errorMessage = payload;
            state.isLoading = false;
        },

        onPlaceRegister: (state, { payload }) => {

            state.places.push(payload);
            state.errorMessage = [];
            state.isLoading = true;
        }
    }
})

export const { onLoad, onLoadRestaurants, onError, onIsLoading, onPlaceRegister } = placesSlice.actions;