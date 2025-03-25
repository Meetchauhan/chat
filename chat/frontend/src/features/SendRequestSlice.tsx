import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SendRequestSliceInitialState } from "../types/Types";

export const sendRequest = createAsyncThunk(
  "sendRequest",
  async (recieverId: string) => {
    const response = await axios.post(
      "http://localhost:1322/api/sendRequest",
      { recieverId },
      { withCredentials: true }
    );
    return response.data;
  }
);

export const getRequest = createAsyncThunk("getRequest", async () => {
  const response = await axios.get("http://localhost:1322/api/getRequest", {
    withCredentials: true,
  });
  return response.data;
});

export const sentRequest = createAsyncThunk("sentRequest", async () => {
  const response = await axios.get("http://localhost:1322/api/sentRequest", {
    withCredentials: true,
  });
  return response.data;
});

const initialState: SendRequestSliceInitialState = {
  data: null,
  loading: false,
  error: null,
  sendRequest: null,
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
      .addCase(sendRequest.fulfilled, (state) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(sendRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      })
      .addCase(getRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      })
      .addCase(sentRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(sentRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.sendRequest = action.payload;
      })
      .addCase(sentRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default sendRequestSlice.reducer;
