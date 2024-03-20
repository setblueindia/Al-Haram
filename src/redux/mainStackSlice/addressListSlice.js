<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  homeData: null,
  loading: false,
  error: null,
};
const addresslistSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setproductfilterlistStart: state => {
      state.loading = true;
      state.error = null;
    },
    setproductfilterlistSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    setproductfilterlistFailure: (state, action) => {
=======
// addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
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
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      state.loading = false;
      state.error = action.payload;
    },
  },
});
<<<<<<< HEAD
export const {setproductfilterlistStart,setproductfilterlistSuccess,setproductfilterlistFailure} =addresslistSlice.actions;
export default addresslistSlice.reducer;

=======

export const { setAddressData, setAddressLoading, setAddressError } = addressSlice.actions;
export default addressSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c






// import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
// const addressSlice = createSlice({
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
=======
// const addressListSlice = createSlice({
//   name: 'addressList', 
//   initialState: {
//     addressList: [],
//   },
//   reducers: {
//     setAddressList: (state, action) => {
//       state.addressList = action.payload;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
//     },
//   },
// });

<<<<<<< HEAD
// export const { setAddressData, setAddressLoading, setAddressError } = addressSlice.actions;
// export default addressSlice.reducer;
=======
// export const { setAddressList } = addressListSlice.actions;

// export const selectAddressList = (state) => state.addressList.addressList;  // <-- Changed the selector name

// export default addressListSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
