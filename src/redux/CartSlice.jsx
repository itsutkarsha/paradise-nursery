import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...item,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        item.quantity--;
        state.totalQuantity--;

        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    }

  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;