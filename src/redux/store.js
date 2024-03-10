import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import navbarReducer from "./slices/navbarSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
  },
});
