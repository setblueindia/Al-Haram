import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
};

const CetegouriesData = createSlice({
    name: "CetegouriesDataStore",
    initialState,
    reducers: {
        addCetegoriesData(state, action) {
            state.data = action.payload;
        },
        updateCetegoriesData(state, action) {
            state.data = action.payload
        },
    }
})
export const { addCetegoriesData, updateCetegoriesData } = CetegouriesData.actions;
export default CetegouriesData.reducer;

