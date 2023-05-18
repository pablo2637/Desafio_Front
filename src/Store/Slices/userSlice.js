import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        status: 'non-authenticated',
        coords: {},
        errorMessage: undefined
    },

    reducers: {

        onLogin: (state, action) => {

            state.user = action.payload,
                state.errorMessage = {},
                state.status = 'authenticated'
        },

        onLoadCoords: (state, { payload }) => {

            state.coords = payload;
        },

        onLogout: (state, action) => {

            state.user = {};
            state.errorMessage = action.payload;
            state.status = 'non-authenticated'
        },

        onRegister: (state, action) => {

            state.user = action.payload;
            state.errorMessage = {}
        },

        onError: (state, action) => {

            console.log('esto es action', action)
            state.user = {};
            state.errorMessage = action.payload
        }
    }
})

export const { onLogin, onLoadCoords, onLogout, onRegister, onError } = userSlice.actions;