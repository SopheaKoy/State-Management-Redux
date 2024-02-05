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
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.total += 1;
      }
    },
    increaseQuantity(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else if (item.quantity > 1) {
        state.items = state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      state.total--;
    },
    removeAll(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

//export action of slice
export const { add, removeAll, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
