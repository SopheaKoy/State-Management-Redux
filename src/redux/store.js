import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import ProductSlice from "./features/product/ProductSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductSlice,
    user: userSlice,
  },
});
