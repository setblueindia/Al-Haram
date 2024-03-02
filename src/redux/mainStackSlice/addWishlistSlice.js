import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  wishlistData: null,
};

const addWishlistSlice = createSlice({
  name: 'addWishlist',
  initialState,
  reducers: {
    addWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },
    addWishlistSuccess(state, action) {
      state.loading = false;
      state.wishlistData = action.payload;
    },
    addWishlistFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addWishlistStart, addWishlistSuccess, addWishlistFailure } = addWishlistSlice.actions;

export default addWishlistSlice.reducer;
