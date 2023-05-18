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
    },

    reducers: {

        onLogin: (state, action) => {
            
            state.user = action.payload,
            state.errorMessage = {},
            state.status = 'authenticated'
        },

        onLogout: (state,action) => {

            state.user = {};
            state.errorMessage = action.payload;
            state.status = 'non-authenticated'
        },

        onRegister: (state,action) => {

            state.user = action.payload;
            state.errorMessage = {}
        },

        onError: (state,action) => {

            console.log('esto es action', action)
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

export const { onLogin, onLogout, onRegister, onError, onsetFormData,onsetQRValue } = userSlice.actions;