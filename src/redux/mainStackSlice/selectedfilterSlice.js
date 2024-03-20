import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
=======



>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
const selectedFilterSlice = createSlice({
    name: 'selectedFilter',
    initialState: {
      data: [],
      loading: 'idle',
      error: null,
    },
    reducers: {
      setSelectedFilter: (state, action) => {
        state.data = action.payload;
      },
    },

  });
<<<<<<< HEAD
=======
  
  // Export actions and selectors
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  export const { setSelectedFilter } = selectedFilterSlice.actions;
  export const selectSelectedFilter = (state) => state.selectedFilter.data;
  export const selectSelectedFilterLoading = (state) => state.selectedFilter.loading;
  export const selectSelectedFilterError = (state) => state.selectedFilter.error;
  
  export default selectedFilterSlice.reducer;