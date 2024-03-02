import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  responseData: null,
};

const mobileLoginSlice = createSlice({
  name: 'mobileLogin',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.responseData = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.responseData = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, loginSuccess, loginFailure } = mobileLoginSlice.actions;
export default mobileLoginSlice.reducer;