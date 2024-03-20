import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
<<<<<<< HEAD
export const selectCategories = (state) => state.category.categories;
export default categorySlice.reducer;
=======


export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;


>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
