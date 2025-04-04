import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SendOtpPayload, SendOtpState, VerifyOtp } from "../types/Types";
import io from "socket.io-client";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendOtp = createAsyncThunk(
  "sendOtp",
  async ({ email }: SendOtpPayload) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, {
        email,
      });
      return response.data;
    } catch (error: unknown) {
      console.error("Error in user registration", error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async ({ otp }: VerifyOtp) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/verifyOTP`,
        {
          otp,
        },
        { withCredentials: true }
      );
      return response.data;
    } catch (error: unknown) {
      console.error("Error in user registration", error);
    }
  }
);

export const logout = createAsyncThunk("logout", async () => {
  const response = await axios.post(
    `${API_BASE_URL}/user/logout`,
    {},
    { withCredentials: true }
  );
  return response.data;
});

const initialState: SendOtpState = {
  loading: false,
  sendOtpState: null,
  verifyOtpState: null,
  sendOtpLoading: false,
  error: null,
  socket: null,
  onlineUsers: [],
  loginEmail: null,
};

const RegistrationSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetSendOtpState: (state) => {
      state.sendOtpState = null;
    },
    resetVerifyOtpState: (state) => {
      state.verifyOtpState = null;
    },
    connectSocker: (state, action) => {
      const userId = action.payload.userId;

      if (!state.socket && userId) {
        const socket = io(BASE_URL, { query: { userId } });

        socket.connect();
        state.socket = socket;
      }
    },
    disconnectSocker: (state) => {
      if (state.socket) {
        state.socket.disconnect();
        state.socket = null;
      }
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    getLoginEmail: (state, action) => {
      state.loginEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.sendOtpLoading = true;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.sendOtpLoading = false;
        state.sendOtpState = action.payload;
        // localStorage.setItem("loginMain", JSON.stringify(action.payload));
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.sendOtpLoading = false;
        state.error = action.error.message;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyOtpState = action.payload;
        localStorage.removeItem("loginMain");
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        localStorage.removeItem("selectedUser");
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  resetSendOtpState,
  resetVerifyOtpState,
  connectSocker,
  disconnectSocker,
  setOnlineUsers,
  getLoginEmail,
} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;
