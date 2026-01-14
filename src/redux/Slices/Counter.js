import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: 0,
};

export const addCounter = createSlice({
    name: 'addCounter',
    initialState,
    reducers: {

        addNumber(state, action) {
            state.data = action.payload;
        },
        removeNumber(state, action) {
            state.data = action.payload;
        },
    },
});

export const { addNumber, removeNumber } = addCounter.actions;

export default addCounter.reducer;
