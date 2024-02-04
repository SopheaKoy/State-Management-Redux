import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: [],
  total: 0,
};

// create Slice that contains the reducer and action
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // check product is already in cart
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        state.items = state.items.map((item) => {
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        state.items.push(action.payload);
        state.total += 1;
      }
    },
    increaseQuantity(state, action) {
      //
      state.items = state.items.map((item) => {
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decreaseQuantity(state, action) {
      //
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id && item.quantity === 1) {
          state.items = state.items.filter(
            (items) => items.id !== action.payload.id
          );
        } else if (item.id == action.payload.id && item.quantity > 1) {
          state.items = state.items.map((items) => {
            items.id === action.payload.id
              ? { ...items, quantity: items.quantity - 1 }
              : items;
          });
        }
      });
      state.total--;
    },
    removeAll(state) {
      (state.items = []), (state.total = 0);
    },
  },
});

//export action of slice
export const { add, removeAll, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
