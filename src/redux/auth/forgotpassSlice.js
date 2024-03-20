import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const forgotpassSlice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    forgotpassStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    forgotpassSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    forgotpassFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { forgotpassStart,forgotpassSuccess, forgotpassFailure } = forgotpassSlice.actions;
export default forgotpassSlice.reducer;
