import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterUserState, UserRegisterPayload } from "../types/Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userRegistration = createAsyncThunk(
  "userRegister",
  async ({ firstName, lastName, email, phone }: UserRegisterPayload) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      });
      return response.data;
    } catch (error: unknown) {
      console.error("Error in user registration", error);
    }
  }
);

const initialState: RegisterUserState = {
  loading: false,
  data: null,
  error: null,
};

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.pending, (state) => {
        state.loading = false;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetRegisterState } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;
