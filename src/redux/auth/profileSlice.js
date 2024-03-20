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

<<<<<<< HEAD
export default profileUpdateSlice.reducer;
=======
export default profileUpdateSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
