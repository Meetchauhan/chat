import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SendRequestSliceInitialState } from "../types/Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendRequest = createAsyncThunk(
  "sendRequest",
  async (recieverId: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/sendRequest`,
      { recieverId },
      { withCredentials: true }
    );
    return response.data;
  }
);

export const getRequest = createAsyncThunk("getRequest", async () => {
  const response = await axios.get(`${API_BASE_URL}/getRequest`, {
    withCredentials: true,
  });
  return response.data;
});

export const sentRequest = createAsyncThunk("sentRequest", async () => {
  const response = await axios.get(`${API_BASE_URL}/sentRequest`, {
    withCredentials: true,
  });
  return response.data;
});

const initialState: SendRequestSliceInitialState = {
  data: null,
  loading: false,
  getRequestLoading: false,
  error: null,
  sendRequest: null,
  sentRequestLoading: false,
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
        state.getRequestLoading = true;
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.getRequestLoading = false;
        state.data = action.payload;
      })
      .addCase(getRequest.rejected, (state, action) => {
        state.getRequestLoading = false;
        state.error = action.error.message || "Something is wrong";
      })
      .addCase(sentRequest.pending, (state) => {
        state.sentRequestLoading = true;
      })
      .addCase(sentRequest.fulfilled, (state, action) => {
        state.sentRequestLoading = false;
        state.sendRequest = action.payload;
      })
      .addCase(sentRequest.rejected, (state, action) => {
        state.sentRequestLoading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default sendRequestSlice.reducer;
