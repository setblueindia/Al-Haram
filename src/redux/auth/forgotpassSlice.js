import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const forgotpassSlice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    forgotpassStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    forgotpassSuccess(state) {
      state.loading = false;
      state.success = true;
    },
    forgotpassFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { forgotpassStart,forgotpassSuccess, forgotpassFailure } = forgotpassSlice.actions;
<<<<<<< HEAD
export default forgotpassSlice.reducer;
=======

export default forgotpassSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   error: null,
//   success: false,
// };

// const resetpassSlice = createSlice({
//   name: 'resetPass',
//   initialState,
//   reducers: {
//     resetPassStart(state) {
//       state.loading = true;
//       state.error = null;
//       state.success = false;
//     },
//     resetPassSuccess(state) {
//       state.loading = false;
//       state.success = true;
//     },
//     resetPassFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { resetPassStart, resetPassSuccess, resetPassFailure } = resetpassSlice.actions;

// export default resetpassSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
