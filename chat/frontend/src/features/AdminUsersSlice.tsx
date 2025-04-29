import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { adminUsersStateType } from "../types/Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const adminAllUsers = createAsyncThunk("adminAllUsers", async () => {
  const response = await axios(`${API_BASE_URL}/admin/getAllUsers`);
  return response.data;
});

export const adminDeleteUser = createAsyncThunk(
  "adminDeleteUser",
  async (_id: string) => {
    const response = await axios.delete(`${API_BASE_URL}/admin/deleteUser`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        _id,
      },
    });
    return response.data;
  }
);

const initialState: adminUsersStateType = {
  users: null,
  loading: false,
  error: null,
};

const AdminUserSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(adminAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(adminDeleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminDeleteUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(adminDeleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default AdminUserSlice.reducer;
