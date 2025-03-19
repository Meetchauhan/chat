import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const ToastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state) => {
      state.value = true;
    },
    closeToast: (state) => {
      state.value = false;
    },
  },
});

export const { showToast, closeToast } = ToastSlice.actions;

export default ToastSlice.reducer;
