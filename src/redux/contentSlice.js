import { createSlice } from "@reduxjs/toolkit";
import { fetchPostData } from "./middleware/articlesPost";

const contentSlice = createSlice({
  name: "contentSlice",
  initialState: {
    content: "<p>This is the initial content of the editor.</p>",
    server: "",
  },
  extraReducers: {
    [fetchPostData.fulfilled]: (state, action) => {
      state.server = action.payload;
    },
  },
  reducers: {
    addContent: (state, action) => {
      state.content = action.payload;
    },
  },
});
export const { addContent } = contentSlice.actions;
export default contentSlice.reducer;
