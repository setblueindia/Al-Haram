// categoryListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categoryListSlice = createSlice({
  name: 'categoryList',
  initialState: {
    categoryList: [],
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryList } = categoryListSlice.actions;

export const selectCategoryList = (state) => state.categoryList.categoryList;

export default categoryListSlice.reducer;
