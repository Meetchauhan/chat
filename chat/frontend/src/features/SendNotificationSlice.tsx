import { createSlice } from "@reduxjs/toolkit";

interface SendNotificationInitialState {
  token: string | null;
}

const initialState: SendNotificationInitialState = {
  token: null,
};

const SendNotificationSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { getToken } = SendNotificationSlice.actions;

export default SendNotificationSlice.reducer;
