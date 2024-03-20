<<<<<<< HEAD
// productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsStart: state => {
      state.loading = true;
      state.error = null;
    },
    productsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    productsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
=======
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setproducts: (state, action) => {
      state.categories = action.payload;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    },
  },
});

<<<<<<< HEAD
export const { productsStart, productsSuccess, productsFailure } = productsSlice.actions;
=======
export const { setproducts } = productsSlice.actions;


export const selectproducts = (state) => state.category.categories;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c

export default productsSlice.reducer;


<<<<<<< HEAD

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   products: [],
//   error: null,
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     productsStart: state => {
//       state.loading = true;
//       state.error = null; // Reset error state
//     },
//     productsSuccess: (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     },
//     productsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload; // Store error message instead of entire error object
//     },
//   },
// });

// export const { productsStart, productsSuccess, productsFailure } = productsSlice.actions;

// export default productsSlice.reducer;





// // // productsSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   loading: false,
// //   products: [],
// //   error: null,
// // };

// // const productsSlice = createSlice({
// //   name: 'products',
// //   initialState,
// //   reducers: {
// //     ProductsStart: state => {
// //       state.loading = true;
// //       state.error = null; // Reset error when starting fetching
// //     },
// //     ProductsSuccess: (state, action) => {
// //       state.loading = false;
// //       state.products = action.payload;
// //     },
// //     ProductsFailure: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload; // Store only the error message
// //     },
// //   },
// // });

// // export const { ProductsStart, ProductsSuccess, ProductsFailure } = productsSlice.actions;

// // export default productsSlice.reducer;


// // // import { createSlice } from '@reduxjs/toolkit';

// // // const productsSlice = createSlice({
// // //   name: 'products',
// // //   initialState: {
// // //     loading: false,
// // //     products: [],
// // //     error: null,
// // //   },
// // //   reducers: {
// // //     ProductsStart(state) {
// // //       state.loading = true;
// // //       state.error = null;
// // //     },
// // //     ProductsSuccess(state, action) {
// // //       state.loading = false;
// // //       state.products = action.payload; 
// // //       state.error = null; 
// // //     },
// // //     ProductsFailure(state, action) {
// // //       state.loading = false;
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   // name: 'products',
// // //   // initialState: {
// // //   //   products: [],
// // //   // },
// // //   // reducers: {
// // //   //   ProductsStart(state) {
// // //   //     state.loading = true;
// // //   //     state.error = null;
// // //   //   },
// // //   //   ProductsSuccess(state, action) {
// // //   //     state.loading = false;
// // //   //     state.products = action.payload; 
// // //   //     state.error = null; 
// // //   //   },
// // //   // ProductsFailure(state, action) {
// // //   //     state.loading = false;
// // //   //     state.error = action.payload;
// // //   //   },
// // //   // },
// // // });
// // // export const { ProductsStart, ProductsSuccess, ProductsFailure } = productsSlice.actions;
// // // export const selectproducts = (state) => state.category.categories;
// // // export default productsSlice.reducer;


// // // import { createSlice } from '@reduxjs/toolkit';

// // // const productsSlice = createSlice({
// // //   name: 'products',
// // //   initialState: {
// // //     products: [],
// // //   },
// // //   reducers: {
// // //     ProductsStart(state) {
// // //       state.loading = true;
// // //       state.error = null;
// // //     },
// // //     ProductsSuccess(state, action) {
// // //       state.loading = false;
// // //       state.products = action.payload; 
// // //       state.error = null; 
// // //     },
// // //   ProductsFailure(state, action) {
// // //       state.loading = false;
// // //       state.error = action.payload;
// // //     },
// // //   },
// // // });
// // // export const { ProductsStart, ProductsSuccess, ProductsFailure } = productsSlice.actions;
// // // export const selectproducts = (state) => state.category.categories;
// // // export default productsSlice.reducer;
=======
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
