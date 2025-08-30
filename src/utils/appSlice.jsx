import { createSlice } from "@reduxjs/toolkit";

const appSclice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    items: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSclice.actions;
export default appSclice.reducer;
