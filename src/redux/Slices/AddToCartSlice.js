import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: 0,
    // numberOfProduct: ''
};

export const addToCart = createSlice({
    name: 'AddToCart',
    initialState,

    reducers: {
        addProduct(state, action) {
            console.log("action ======> ",  action?.payload)
            state.data = action.payload;
            // numberOfProduct = action.payload
        },
        removeProduct(state, action) {
            state.data = action.payload;
            // numberOfProduct.data = action.payload
        },
    },
});

export const { addProduct, removeProduct } = addToCart.actions;

export default addToCart.reducer;
