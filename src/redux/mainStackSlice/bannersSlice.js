

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
<<<<<<< HEAD
=======
    // Action to set banners
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    setBanners: (state, action) => {
      state.banners = action.payload;
      state.loading = false;
      state.error = null;
    },
<<<<<<< HEAD
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
=======
    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Action to set error state
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setBanners, setLoading, setError } = bannersSlice.actions;

<<<<<<< HEAD
export default bannersSlice.reducer;
=======
export default bannersSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
