import contentReducer from "./contentSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    contentReducer: contentReducer,
  },
});
