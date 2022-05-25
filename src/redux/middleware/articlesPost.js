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
      .then(({ data }) => data)
);
export const fetchGetCategories = createAsyncThunk("contentSlice/getData", () =>
  axios.get(`http://localhost:8080/getCategories`).then(({ data }) => data)
);
export const fetchGetArticles = createAsyncThunk(
  "contentSlice/getArticles",
  (params) =>
    axios
      .post(`http://localhost:8080/getArticles`, params)
      .then(({ data }) => data)
);
