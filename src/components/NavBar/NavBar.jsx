import React from "react";
import style from "./NavBar.module.css";
const navList = ["Главная страница", "Новости", "Контакты"];

export const NavBar = () => {
  return (
    <ul className={style.navBarContainer}>
      {navList.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
};
