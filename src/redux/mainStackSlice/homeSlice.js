// homeSlice.js (Redux slice file)
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  homeData: null,
  loading: false,
  error: null,
};
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homeData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setHomeError: (state, action) => {
      state.homeData = null;
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.homeData = null;
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setHomeData, setHomeError, setLoading } = homeSlice.actions;

export default homeSlice.reducer;


