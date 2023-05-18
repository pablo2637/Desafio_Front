import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  formData: {
    // name: '',
    // email: '',
  },
  qrValue: '',
};


export const generatorSlice = createSlice({
    name: 'generate',
     initialState,


  reducers: {

    setFormData: (state, action) => {

      state.formData = action.payload;
    },


    setQRValue: (state, action) => {

      state.qrValue = action.payload;
    },
  },
});

export const { setFormData, setQRValue } = generatorSlice.actions;

// export default generatorSlice.reducer;
