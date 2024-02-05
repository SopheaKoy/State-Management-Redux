import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../library/baseUrl";

// remember when you using Redux to store data and retrive data from APIs . It has 3 state Loading , Success , failed
const initialState = {
  products: [],
  status: "idle", // Success , Loading , failed
  error: null,
};

// create AsyncThunk
export const fetchProduct = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(BASE_URL + "/products");
    const data = await response.json();
    return data;
  }
);

// create Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(buidler) {
    buidler.addCase(fetchProduct.pending, (state, action) => {
      state.status = "loading";
    });
    buidler.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = "successed";
      state.products = action.payload;
    });
    buidler.addCase(fetchProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

// export to us outside
export default productSlice.reducer;
