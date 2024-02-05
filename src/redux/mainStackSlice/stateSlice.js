import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setStateData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { setStateData, setError } = stateSlice.actions;

export const selectStateData = (state) => state.state.data;
export const selectStateError = (state) => state.state.error;

export default stateSlice.reducer;
