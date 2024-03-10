import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    open: true,
  },
  reducers: {
    setNavbar: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;