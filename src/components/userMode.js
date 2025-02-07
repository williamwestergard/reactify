import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const userMode = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = userMode.actions;
export default userMode.reducer;
