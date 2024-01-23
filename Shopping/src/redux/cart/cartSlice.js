import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCart: [],
  itemCount: 0,
  summaryPrice: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      // Ensure currentCart is an array
      if (!Array.isArray(state.currentCart)) {
        state.currentCart = [];
      }

      // Check if the item already exists in the cart
      const existingItem = state.currentCart.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        // If the item exists, update its count
        existingItem.count += 1;
        existingItem.totalPrice +=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;

        state.summaryPrice +=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;
      } else {
        // If the item doesn't exist, add it to the cart
        state.currentCart.push({
          ...newItem,
          count: 1,
          totalPrice:
            newItem.offer === false ? newItem.price : newItem.discountPrice,
        });
        state.itemCount += 1;

        state.summaryPrice +=
          newItem.offer === false ? newItem.price : newItem.discountPrice;
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;

      const existingItem = state.currentCart.find(
        (item) => item.id === itemIdToRemove
      );

      state.summaryPrice -= existingItem.totalPrice;

      // Remove the item from currentCart
      state.currentCart = state.currentCart.filter(
        (item) => item.id !== itemIdToRemove
      );

      // Update the total item count
      state.itemCount -= 1;
    },
    decrementItem: (state, action) => {
      const itemIdToDecrement = action.payload;

      const existingItem = state.currentCart.find(
        (item) => item.id === itemIdToDecrement
      );

      if (existingItem && existingItem.count === 1) {
        existingItem.count -= 1;
        state.itemCount -= 1;
        state.summaryPrice -=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;
        //item remove from the cart
        state.currentCart = state.currentCart.filter(
          (item) => item.id !== itemIdToDecrement
        );
        //price decrease item
        // existingItem.totalPrice -= 1000
      }
      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
        existingItem.totalPrice -=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;

        state.summaryPrice -=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;
      }
    },
    incrementItem: (state, action) => {
      const itemIdToDecrement = action.payload;
      const existingItem = state.currentCart.find(
        (item) => item.id === itemIdToDecrement
      );
      if (existingItem) {
        existingItem.count += 1;
        existingItem.totalPrice +=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;

        state.summaryPrice +=
          existingItem.offer === false
            ? existingItem.price
            : existingItem.discountPrice;
      }
    },
  },
});

export const { addItemToCart, removeFromCart, decrementItem, incrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
