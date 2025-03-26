import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AcceptRequestSliceInitialState } from "../types/Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const acceptRequest = createAsyncThunk("acceptRequest", async (recieverId: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/acceptRequest`,
    { recieverId },
    { withCredentials: true }
  );
  return response.data;
});

const initialState: AcceptRequestSliceInitialState = {
  data: null,
  loading: false,
  error: null,
};

const acceptRequestSlice = createSlice({
  name: "sendRequest  ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(acceptRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(acceptRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(acceptRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default acceptRequestSlice.reducer;
