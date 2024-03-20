import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const profileUpdateSlice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    profileUpdateStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    profileUpdateSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    profileUpdateFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { profileUpdateStart, profileUpdateSuccess, profileUpdateFailure } = profileUpdateSlice.actions;

export default profileUpdateSlice.reducer;