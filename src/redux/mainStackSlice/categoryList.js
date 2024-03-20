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
<<<<<<< HEAD
export const { setCategoryList } = categoryListSlice.actions;
export const selectCategoryList = (state) => state.categoryList.categoryList;
export default categoryListSlice.reducer;
=======

export const { setCategoryList } = categoryListSlice.actions;

export const selectCategoryList = (state) => state.categoryList.categoryList;

export default categoryListSlice.reducer;
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
