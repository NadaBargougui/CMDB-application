import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openRegion: null,
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    toggleRegion: (state, action) => {
      state.openRegion =
        state.openRegion === action.payload ? null : action.payload;
    },
  },
});

export const { toggleRegion } = regionSlice.actions;
export default regionSlice.reducer;
