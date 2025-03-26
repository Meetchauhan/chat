import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersSliceInitialState } from "../types/Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const response = await axios.get(`${API_BASE_URL}/message/all-users`, {
    withCredentials: true,
  });
  return response.data;
});

const initialState: UsersSliceInitialState = {
  data: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default usersSlice.reducer;
