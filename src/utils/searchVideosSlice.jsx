import { createSlice } from "@reduxjs/toolkit";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    items: [],
  },
  reducers: {
    searchResult: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { searchResult } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;
