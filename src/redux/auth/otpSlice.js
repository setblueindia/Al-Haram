
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  otpData: null,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    otpRequest: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.otpData = null;
    },
    otpSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.otpData = action.payload;
    },
    otpFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.otpData = null;
    },
  },
});

export const { otpRequest, otpSuccess, otpFailure } = otpSlice.actions;

export default otpSlice.reducer;
