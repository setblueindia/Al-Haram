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
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setAddressData, setAddressLoading, setAddressError } = addressSlice.actions;
export default addressSlice.reducer;






// import { createSlice } from '@reduxjs/toolkit';

// const addressListSlice = createSlice({
//   name: 'addressList', 
//   initialState: {
//     addressList: [],
//   },
//   reducers: {
//     setAddressList: (state, action) => {
//       state.addressList = action.payload;
//     },
//   },
// });

// export const { setAddressList } = addressListSlice.actions;

// export const selectAddressList = (state) => state.addressList.addressList;  // <-- Changed the selector name

// export default addressListSlice.reducer;
