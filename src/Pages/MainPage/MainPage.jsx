import React, { useEffect } from "react";
import s from "./MainPage.module.css";
import { useNavigate, useParams, useLocation } from "react-router";
import { fetchGetArticles } from "../../redux/middleware/articlesPost";
import { useSelector, useDispatch } from "react-redux";
export const MainPage = () => {
  const { categories, articles } = useSelector((state) => state.contentReducer);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    !params.category
      ? dispatch(fetchGetArticles({ category: "Main", name: "Main" }))
      : dispatch(fetchGetArticles(params));
  }, [params.name]);

  {
    /*<div dangerouslySetInnerHTML={{ __html: content }} />*/
  }
  return (
    <div
      className={s.container}
      dangerouslySetInnerHTML={{ __html: articles.content }}
    ></div>
  );
};
