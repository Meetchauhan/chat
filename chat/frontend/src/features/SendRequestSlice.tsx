import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SendRequestSliceInitialState } from "../types/Types";

export const sendRequest = createAsyncThunk("sendRequest", async (_id) => {
  const response = await axios.post(
    "http://localhost:1322/api/sendRequest",
    { _id },
    { withCredentials: true }
  );
  return response.data;
});

const initialState: SendRequestSliceInitialState = {
  data: null,
  loading: false,
  error: null,
};

const sendRequestSlice = createSlice({
  name: "sendRequest  ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default sendRequestSlice.reducer;
