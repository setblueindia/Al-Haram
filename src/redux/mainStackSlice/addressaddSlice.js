import { createSlice } from '@reduxjs/toolkit';

const addressaddSlice = createSlice({
  name: 'address',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAddressData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setAddressLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setAddressError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addAddress: (state, action) => {
      state.data.push(action.payload); // Assuming payload is the new address data to add
    },
  },
});

export const { setAddressData, setAddressLoading, setAddressError, addAddress } = addressaddSlice.actions;
export default addressaddSlice.reducer;











// // addressaddSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const addressaddSlice = createSlice({
//   name: 'address',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setAddressData: (state, action) => {
//       state.data = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     setAddressLoading: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     setAddressError: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { setAddressData, setAddressLoading, setAddressError } = addressaddSlice.actions;
// export default addressaddSlice.reducer;




// // addressSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const addressaddSlice = createSlice({
//   name: 'address',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setAddressData: (state, action) => {
//       state.data = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     setAddressLoading: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     setAddressError: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { setAddressData, setAddressLoading, setAddressError } = addressaddSlice.actions;
// export default addressaddSlice.reducer;






