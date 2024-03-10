import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("rbp-theme");

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: storedTheme || "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("rbp-theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
