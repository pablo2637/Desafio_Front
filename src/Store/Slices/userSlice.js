import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({

    name: 'user',
    initialState: {
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onLogin: (state, action) => {

            state.user = action.payload,
                state.errorMessage = {}
        },
        onLogout: (state, action) => {
            state.user = {};
            state.errorMessage = action.payload;
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
export const { onLogin, onLogout, onRegister, onError } = userSlice.actions;