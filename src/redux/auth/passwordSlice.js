import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const passwordSlice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    changePasswordStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    changePasswordSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    changePasswordFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { changePasswordStart,changePasswordSuccess, changePasswordFailure } = passwordSlice.actions;

export default passwordSlice.reducer;
