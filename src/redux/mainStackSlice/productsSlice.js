import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setproducts: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setproducts } = productsSlice.actions;


export const selectproducts = (state) => state.category.categories;

export default productsSlice.reducer;


