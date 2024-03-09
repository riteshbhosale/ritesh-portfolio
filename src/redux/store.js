import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSilce";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
