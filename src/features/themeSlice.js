import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    lightTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

// Export the action creator and reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
