import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {};

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await axios.get();
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "graphics",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
