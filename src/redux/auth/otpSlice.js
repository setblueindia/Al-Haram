import { createSlice } from '@reduxjs/toolkit';

export const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    loading: false,
    error: null,
    userData: null,
  },
  reducers: {
    otpVerificationRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.userData = null;
    },
    otpVerificationSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    otpVerificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { otpVerificationRequest, otpVerificationSuccess, otpVerificationFailure } = otpSlice.actions;

export default otpSlice.reducer;
