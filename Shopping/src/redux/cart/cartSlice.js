import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCart: [],
    itemCount: 0,
};
  
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;

            // Ensure currentCart is an array
            if (!Array.isArray(state.currentCart)) {
                state.currentCart = [];
            }

            // Check if the item already exists in the cart
            const existingItem = state.currentCart.find(item => item.id === newItem.id);

            if (existingItem) {
                // If the item exists, update its count
                existingItem.count += 1;
            } else {
                // If the item doesn't exist, add it to the cart
                state.currentCart.push({ ...newItem, count: 1 });
            }

            // Update the total item count
            state.itemCount += 1;
        },
    },
});

export const {
    addItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
