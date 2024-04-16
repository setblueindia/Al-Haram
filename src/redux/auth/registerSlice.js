import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  error: null,
  registrationData: null,
};
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
export const { registrationRequest, registrationSuccess, registrationFailure } = registerSlice.actions;
export default registerSlice.reducer;