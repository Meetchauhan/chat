import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const InstallAppSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openInstallAppModal: (state) => {
      state.value = true;
    },
    closeInstallAppModal: (state) => {
      state.value = false;
    },
  },
});

export const { openInstallAppModal, closeInstallAppModal } =
  InstallAppSlice.actions;

export default InstallAppSlice.reducer;
