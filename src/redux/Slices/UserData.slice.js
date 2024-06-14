import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: ''
};

export const userData = createSlice({
  name: 'UserData',
  initialState,

  reducers: {

    addUserData(state, action) {

      state.data = action.payload;
    },
    updateUserData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addUserData, updateUserData } = userData.actions;

export default userData.reducer;
