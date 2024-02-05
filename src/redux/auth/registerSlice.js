import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerAPI } from './authApi'; // Import the register API function

export const registerAsync = createAsyncThunk('mobileOtpRegistrationMethod/registerAsync', async (userData) => {
  try {
    const response = await registerAPI(userData);
    return response;
  } catch (error) {
    throw error;
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    status: 'idle', 
    error: null,
    message: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Log the response message to the console
        console.log('Registration successful:', action.payload.message);
        state.message = action.payload.message;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectRegisterStatus = (state) => state.register.status;
export const selectRegisterMessage = (state) => state.register.message;

export default registerSlice.reducer;
