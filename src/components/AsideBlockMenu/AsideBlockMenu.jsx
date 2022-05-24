import React from "react";
import s from "./AsideBlockMenu.module.css";
const aboutBeeList = ["Видео", "Медоносы вокруг пасеки"];
export const AsideBlockMenu = ({ item }) => {
  return (
    <div className={s.container}>
      <h3>{item.name}</h3>
      <ul>
        {aboutBeeList.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
