import React from "react";
import s from "./AboutBee.module.css";
const aboutBeeList = ["Видео", "Медоносы вокруг пасеки"];
export const AboutBee = () => {
  return (
    <div className={s.container}>
      <h3>Интересное о пчелах</h3>
      <ul>
        {aboutBeeList.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
