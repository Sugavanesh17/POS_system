
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
    addItems : (state, action) => {
        state.push(action.payload);
    },

    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
            item.price = item.pricePerQuantity * quantity;
        }
    },

    removeItem: (state, action) => {
        return state.filter(item => item.id != action.payload);
    },

    removeAllItems: (state) => {
        return [];
    }
    }
})

export const getTotalPrice = (state) => state.cart.reduce((total, item) => total + item.price, 0);
export const { addItems, removeItem, removeAllItems,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
