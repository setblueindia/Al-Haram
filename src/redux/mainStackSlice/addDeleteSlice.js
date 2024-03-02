import { createSlice } from '@reduxjs/toolkit';


const addressDeleteSlice = createSlice({
  name: 'addressDelete',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    deleteAddressLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteAddressSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    deleteAddressFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteAddressLoading,deleteAddressSuccess,deleteAddressFailure,} = addressDeleteSlice.actions;
export default addressDeleteSlice.reducer;