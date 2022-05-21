import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPostData = createAsyncThunk(
  "contentSlice/articlesPost",
  ({ category, data }) =>
    axios
      .post(`http://localhost:8080/${category}`, data)
      .then(({ data }) => console.log(data))
);
