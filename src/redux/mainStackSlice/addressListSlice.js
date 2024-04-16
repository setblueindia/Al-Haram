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
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {setproductfilterlistStart,setproductfilterlistSuccess,setproductfilterlistFailure} =addresslistSlice.actions;
export default addresslistSlice.reducer;







// import { createSlice } from '@reduxjs/toolkit';

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
//     },
//   },
// });

// export const { setAddressData, setAddressLoading, setAddressError } = addressSlice.actions;
// export default addressSlice.reducer;