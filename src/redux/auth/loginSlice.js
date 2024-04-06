// redux/auth/loginSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from './authApi';

// Async thunk for login
export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
  try {
    const response = await loginAPI(credentials);
    return response.data; // Assuming your API response is an object with a "data" property
  } catch (error) {
    throw error;
  }
});

// Initial state and reducers

const initialState = {
  status: 'idle',
  error: null,
  user: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Assuming the payload contains user data
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors

export const selectLoginStatus = (state) => state.login.status;
export const selectLoginMessage = (state) => state.login.error;
export const selectUserData = (state) => state.login.user;

export default loginSlice.reducer;



// // redux/auth/loginSlice.js
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { loginAPI } from './authApi';

// // Update the loginAsync action creator to fetch email along with other user data
// export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
//   try {
//     const response = await loginAPI(credentials);
//     return response.data; // Assuming your API response is an object with a "data" property
//   } catch (error) {
//     throw error;
//   }
// });

// const loginSlice = createSlice({
//   name: 'login',
//   initialState: {
//     status: 'idle', 
//     error: null,
//     user: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(loginAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload; // Assuming the payload contains user data
//       })
//       .addCase(loginAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// // Selector to get user data
// export const selectUserData = (state) => state.login.user;

// export default loginSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginAPI } from './authApi';

// export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
//   try {
//     const response = await loginAPI(credentials);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// });

// const loginSlice = createSlice({
//   name: 'login',
//   initialState: {
//     status: 'idle', 
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(loginAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         console.log('Login successful:', action.payload.message);
//         state.message = action.payload.message;
//       })
//       .addCase(loginAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectLoginStatus = (state) => state.login.status;
// export const selectLoginMessage = (state) => state.login.message;
// export const selectUserData = (state) => state.login.user; // Add selector for user data

// export default loginSlice.reducer;
