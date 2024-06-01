import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
  loader : false
};

export const drawerList = createSlice({
  name: 'LanguesChange',
  initialState,

  reducers: {
    addDraweData(state, action) {
      state.data = action.payload;

    },
    updateLoader(state, action) {
     state.loader = action.payload
    },
  },
});

export const {addDraweData, updateLoader} = drawerList.actions;

export default drawerList.reducer;
