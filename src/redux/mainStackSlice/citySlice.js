import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setCityData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setCityError: (state, action) => {
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { setCityData, setCityError } = citySlice.actions;

export const selectCityData = (state) => state.city.data;
export const selectCityError = (state) => state.city.error;

export default citySlice.reducer;