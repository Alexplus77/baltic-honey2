import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPostData,
  fetchAddCategory,
  fetchGetCategories,
} from "./middleware/articlesPost";

const contentSlice = createSlice({
  name: "contentSlice",
  initialState: {
    content: "<p>This is the initial content of the editor.</p>",
    server: "",
    categories: [],
  },
  extraReducers: {
    [fetchPostData.fulfilled]: (state, action) => {
      state.server = action.payload;
    },
    [fetchAddCategory.fulfilled]: (state, action) => {
      state.server = action.payload;
    },
    [fetchGetCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
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
