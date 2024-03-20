import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: null,
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    getWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },
    getWishlistSuccess(state, action) {
      state.loading = false;
      state.wishlist = action.payload;
    },
    getWishlistFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getWishlistStart, getWishlistSuccess, getWishlistFailure } = wishlistSlice.actions;

export default wishlistSlice.reducer;