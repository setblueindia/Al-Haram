import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeData: null,
  loading: false,
  error: null,
};
const addressgetSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setaddressgetData: (state, action) => {
      state.addresslistData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setaddressgetError: (state, action) => {
      state.addresslistData = null;
      state.loading = false;
      state.error = action.payload;
    },
    setaddressgetLoading: (state) => {
      state.addresslistData = null;
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setaddressgetData,setaddressgetError, setaddressgetLoading} =addressgetSlice.actions;

export default addressgetSlice.reducer;