import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: '',
};

export const langSlices = createSlice({
  name: 'LanguesChange',
  initialState,

  reducers: {
    addLangCode(state, action) {
      state.data = action.payload;
    },
    updateLangCode(state, action) {
      state.data = action.payload;
    },
  },
});

export const {addLangCode, updateLangCode} = langSlices.actions;

export default langSlices.reducer;
