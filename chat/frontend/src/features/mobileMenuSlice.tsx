import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const MobileMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },
    closeMenu: (state) => {
      state.value = false;
    },
  },
});

export const { openMenu, closeMenu } = MobileMenuSlice.actions;

export default MobileMenuSlice.reducer;
