import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./userMode";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
