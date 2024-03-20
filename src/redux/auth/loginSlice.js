import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from './authApi';
export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
  try {
    const response = await loginAPI(credentials);
    return response.data; 
  } catch (error) {
    throw error;
  }
});
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
        state.user = action.payload; 
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectLoginStatus = (state) => state.login.status;
export const selectLoginMessage = (state) => state.login.error;
export const selectUserData = (state) => state.login.user;
export default loginSlice.reducer;