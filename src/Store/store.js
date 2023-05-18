import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/userSlice';
import { generatorSlice } from './Slices/generatorSlice';

export const store = configureStore({

    reducer: {

      user: userSlice.reducer,

        
    }

  });
