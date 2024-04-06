import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const MainProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload; // Assuming action.payload contains the fetched products
      state.error = null; // Reset error if fetching was successful
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = MainProductSlice.actions;

export default MainProductSlice.reducer;








// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
// };
// const MainProductSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });
// export const { setProducts, setLoading, setError } = MainProductSlice.actions;
// export default MainProductSlice.reducer;
// mainStackSlice.js

// mainProductSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// export const mainProductSlice = createSlice({
//   name: 'mainProduct',
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     // Existing reducer functions...
//     FETCH_PRODUCTS_SUCCESS: (state, action) => {
//       state.products = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     FETCH_PRODUCTS_FAILURE: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { setLoading, setError, setProducts, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } = mainProductSlice.actions;

// export default mainProductSlice.reducer;
