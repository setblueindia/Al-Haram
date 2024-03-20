<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
=======
// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});
<<<<<<< HEAD
export const { setLogin, setLogout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
=======

export const { setLogin, setLogout } = authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
