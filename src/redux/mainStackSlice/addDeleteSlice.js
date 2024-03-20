import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======


>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export const { deleteAddressLoading,deleteAddressSuccess,deleteAddressFailure,} = addressDeleteSlice.actions;
export default addressDeleteSlice.reducer;