import { createSlice } from '@reduxjs/toolkit';

const addressaddSlice = createSlice({
  name: 'address',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAddresslistStart: state => {
      state.loading = true;
      state.error = null;
    },
    setAddresslistSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    setAddresslistFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {setAddresslistStart,setAddresslistSuccess, setAddresslistFailure } = addressaddSlice.actions;
export default addressaddSlice.reducer;