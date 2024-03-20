import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======

// Initial state for registration slice
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const initialState = {
  isLoading: false,
  error: null,
  registrationData: null,
};
<<<<<<< HEAD
=======

// Create a registration slice
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const registerSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.registrationData = null;
    },
    registrationSuccess: (state, action) => {
      state.isLoading = false;
      state.registrationData = action.payload;
    },
    registrationFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
<<<<<<< HEAD
export const { registrationRequest, registrationSuccess, registrationFailure } = registerSlice.actions;
export default registerSlice.reducer;
=======

// Export actions generated by the slice
export const { registrationRequest, registrationSuccess, registrationFailure } = registerSlice.actions;
export default registerSlice.reducer;




// // registerSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { registerAPI } from './authApi';

// export const registerAsync = createAsyncThunk('mobileOtpRegistrationMethod/registerAsync', async (userData) => {
//   try {
//     const response = await registerAPI(userData);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// });

// const registerSlice = createSlice({
//   name: 'register',
//   initialState: {
//     status: 'idle',
//     error: null,
//     message: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(registerAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.message = action.payload.message;
//       })
//       .addCase(registerAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectRegisterStatus = (state) => state.register.status;
// export const selectRegisterMessage = (state) => state.register.message;

// export default registerSlice.reducer;


// // // import { createSlice } from '@reduxjs/toolkit';

// // // const initialState = {
// // //   otp: null,
// // //   success: false,
// // //   error: null,
// // // };

// // // const userSlice = createSlice({
// // //   name: 'user',
// // //   initialState,
// // //   reducers: {
// // //     setOtp: (state, action) => {
// // //       state.otp = action.payload;
// // //     },
// // //     setSuccess: (state, action) => {
// // //       state.success = action.payload;
// // //     },
// // //     setError: (state, action) => {
// // //       state.error = action.payload;
// // //     },
// // //     resetState: (state) => {
// // //       state.otp = null;
// // //       state.success = false;
// // //       state.error = null;
// // //     },
// // //   },
// // // });

// // // export const { setOtp, setSuccess, setError, resetState } = userSlice.actions;

// // // export default userSlice.reducer;





// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { registerAPI } from './authApi'; // Import the register API function

// // export const registerAsync = createAsyncThunk('mobileOtpRegistrationMethod/registerAsync', async (userData) => {
// //   try {
// //     const response = await registerAPI(userData);
// //     return response;
// //   } catch (error) {
// //     throw error;
// //   }
// // });

// // const registerSlice = createSlice({
// //   name: 'register',
// //   initialState: {
// //     status: 'idle', 
// //     error: null,
// //     message: null, 
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(registerAsync.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(registerAsync.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         // Log the response message to the console
// //         console.log('Registration successful:', action.payload.message);
// //         state.message = action.payload.message;
// //       })
// //       .addCase(registerAsync.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export const selectRegisterStatus = (state) => state.register.status;
// // export const selectRegisterMessage = (state) => state.register.message;

// // export default registerSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
