import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        status: 'non-authenticated',

        errorMessage: undefined,

        formData: {
            name: '',
            email: '',
          },
          qrValue: '',

        coords: {},

    },

    reducers: {

        onLogin: (state, action) => {

            state.user = action.payload,
                state.errorMessage = [],
                state.status = 'authenticated'
        },

        onLoadCoords: (state, { payload }) => {

            state.coords = payload;
        },

        onLogout: (state, action) => {

            state.user = {};
            state.errorMessage = [];
            state.status = 'non-authenticated'
        },

        onRegister: (state, action) => {

            state.user = action.payload;
            state.errorMessage = [],
            state.status = 'authenticated'
        },

        onError: (state, action) => {

            state.user = {};
            state.errorMessage = action.payload
        },

        onsetFormData: (state, action) => {

            state.formData = action.payload;
          },
      
      
        onsetQRValue: (state, action) => {
      
            state.qrValue = action.payload;
          },
    }
})


export const { onLogin, onLogout, onLoadCoords ,onRegister, onError, onsetFormData, onsetQRValue } = userSlice.actions;


