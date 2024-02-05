

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  banners: [], // Initial state for banners
  loading: false,
  error: null,
};

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    // Action to set banners
    setBanners: (state, action) => {
      state.banners = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Action to set error state
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setBanners, setLoading, setError } = bannersSlice.actions;

export default bannersSlice.reducer;
