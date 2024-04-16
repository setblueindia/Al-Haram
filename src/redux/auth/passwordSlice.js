import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const passwordSlice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    gotpassStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    gotpassSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    gotpassFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {gotpassStart,gotpassSuccess,gotpassFailure } = passwordSlice.actions;
export default passwordSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const passwordSlice = createSlice({
//   name: 'password',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setpasswlistStart: state => {
//       state.loading = true;
//       state.error = null;
//     },
//     setpasswlistSuccess: (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//       state.error = null;
//     },
//     setpasswlistFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {setpasswlistStart, setpasswlistSuccess, setpasswlistFailure} = passwordSlice.actions;
// export default passwordSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   isLoading: false,
//   error: null,
//   registrationData: null,
// };
// const paswSlice = createSlice({
//   name: 'pasw',
//   initialState,
//   reducers: {
//     paswRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//       state.success = false;
//     },
//     paswSuccess: (state, action) => {
//       state.isLoading = false;
//       state.registrationData = action.payload;
//     },
//     paswFailure: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
// export const { paswRequest, paswSuccess,paswFailure } = paswSlice.actions;
// export default paswSlice.reducer;