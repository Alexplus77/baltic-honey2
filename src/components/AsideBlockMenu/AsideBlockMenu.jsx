import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./AsideBlockMenu.module.css";

export const AsideBlockMenu = ({ item }) => {
  console.log("item", item);

  return (
    <div className={s.container}>
      <h3>{item.name}</h3>
      <ul>
        {item.articles?.map((el) => (
          <li key={el._id}>
            <Link to={`/${item.name}/${el.title}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
