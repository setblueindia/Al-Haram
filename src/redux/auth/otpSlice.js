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




// // otpSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   success: false,
//   error: null,
//   otpData: null,
// };

// const otpSlice = createSlice({
//   name: 'otp',
//   initialState,
//   reducers: {
//     otpRequest: (state) => {
//       state.loading = true;
//       state.success = false;
//       state.error = null;
//       state.otpData = null;
//     },
//     otpSuccess: (state, action) => {
//       state.loading = false;
//       state.success = true;
//       state.error = null;
//       state.otpData = action.payload;
//     },
//     otpFailure: (state, action) => {
//       state.loading = false;
//       state.success = false;
//       state.error = action.payload;
//       state.otpData = null;
//     },
//   },
// });

// export const { otpRequest, otpSuccess, otpFailure } = otpSlice.actions;

// export default otpSlice.reducer;
