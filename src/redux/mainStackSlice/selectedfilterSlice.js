import { createSlice } from '@reduxjs/toolkit';



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
  
  // Export actions and selectors
  export const { setSelectedFilter } = selectedFilterSlice.actions;
  export const selectSelectedFilter = (state) => state.selectedFilter.data;
  export const selectSelectedFilterLoading = (state) => state.selectedFilter.loading;
  export const selectSelectedFilterError = (state) => state.selectedFilter.error;
  
  export default selectedFilterSlice.reducer;