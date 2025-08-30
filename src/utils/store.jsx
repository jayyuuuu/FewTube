import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchVideoSlice from "./searchVideosSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchVideos: searchVideoSlice,
  },
});
export default appStore;
