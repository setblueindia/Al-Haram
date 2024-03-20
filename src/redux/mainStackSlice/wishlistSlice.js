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

<<<<<<< HEAD
export default wishlistSlice.reducer;
=======
export default wishlistSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit'; 

// const initialState = {
//   wishlist: null,
//   loading: false,
//   error: null,
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     getWishlistStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     getWishlistSuccess(state, action) {
//       state.loading = false;
//       state.wishlist = action.payload;
//     },
//     getWishlistFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// // Export actions
// export const { getWishlistStart, getWishlistSuccess, getWishlistFailure } = wishlistSlice.actions;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
