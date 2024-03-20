<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeData: null,
  loading: false,
  error: null,
};
const drawerListSlice = createSlice({
  name: 'mainStack',
  initialState,
  reducers: {
    drawerListStart: state => {
      state.loading = true;
      state.error = null; // Reset error state when starting fetching
    },
    drawerListSuccess: (state, action) => {
      state.loading = false;
      state.drawerList = action.payload;
    },
    drawerListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store error message instead of entire error object
    },
  },
  // name: 'home',
  // initialState,
  // reducers: {
  //   drawerListData: (state, action) => {
  //     state.addresslistData = action.payload;
  //     state.loading = false;
  //     state.error = null;
  //   },
  //   drawerListError: (state, action) => {
  //     state.addresslistData = null;
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  //   drawerListLoading: (state) => {
  //     state.addresslistData = null;
  //     state.loading = true;
  //     state.error = null;
  //   },
  // },
});

export const { drawerListStart, drawerListSuccess,drawerListFailure} = drawerListSlice.actions;

export default drawerListSlice.reducer;
=======

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

// Define and export your selector
export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;


>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
