import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
};

const HomeData = createSlice({
    name: "HomeScreen",
    initialState,
    reducers: {
        addHomeScreenData(state, action) {
            state.data = action.payload;
        },
        updateHomeScreenData(state, action) {
            state.data = action.payload;
        },

    }
})

export const { addHomeScreenData, updateHomeScreenData } = HomeData.actions;
export default HomeData.reducer;