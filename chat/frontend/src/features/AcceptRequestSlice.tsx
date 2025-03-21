import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AcceptRequestSliceInitialState } from "../types/Types";

export const acceptRequest = createAsyncThunk("acceptRequest", async (_id) => {
  const response = await axios.post(
    "http://localhost:1322/api/acceptRequest",
    { _id },
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
