import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.userData = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export const selectLoginLoading = (state) => state.login.isLoading;
export const selectLoginError = (state) => state.login.error;
export const selectUserData = (state) => state.login.userData;

export default loginSlice.reducer;
