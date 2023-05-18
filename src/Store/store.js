import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Slices/userSlice';
import { placesSlice } from './Slices/placesSlice';

export const store = configureStore({

  reducer: {

    user: userSlice.reducer,
    places: placesSlice.reducer

  }

});
