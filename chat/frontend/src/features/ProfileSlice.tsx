import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileInitialState } from "../types/Types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProfile = createAsyncThunk("profile", async () => {
  const respose = await axios.get(`${API_BASE_URL}/user/profile`, {
    withCredentials: true,
  });
  return respose.data;
});

const initialState: ProfileInitialState = {
  loading: false,
  data: null,
  error: null,
};

const usersSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = null; 
        state.error = action.error.message || "Something is wrong";
      });
  },
});
export default usersSlice.reducer;
