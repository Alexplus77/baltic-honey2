import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPostData = createAsyncThunk(
  "contentSlice/articlesPost",
  ({ category, data }) =>
    axios
      .post(`http://localhost:8080/addArticle`, data)
      .then(({ data }) => console.log(data))
);

export const fetchAddCategory = createAsyncThunk(
  "contentSlice/addCategory",
  (category) =>
    axios
      .post(`http://localhost:8080/addCategory`, category)
      .then(({ data }) => console.log(data))
);
