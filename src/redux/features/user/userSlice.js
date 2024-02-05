import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../library/baseUrl";

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

// fetch data
export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async ({ name, email, password, avatar }) => {
    let body = JSON.stringify({
      name,
      email,
      password,
      avatar,
    });
    const response = await fetch(BASE_URL + "/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();

    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCreateUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCreateUser.fulfilled, (state, action) => {
      state.status = "successed";
      //   state.user.push(action.payload);
      state.user = action.payload;
    });
    builder.addCase(fetchCreateUser.rejected, (state, action) => {
      state.status = "Failed...!";
      state.error = state.error.message;
    });
  },
});

export default userSlice.reducer;

// custom selector
export const selectAvatar = (state) => state?.user?.user?.avatar || "";
