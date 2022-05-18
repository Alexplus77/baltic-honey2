import React from "react";
import s from "./NavBar.module.css";
const navList = ["Главная страница", "Новости", "Контакты"];

export const NavBar = () => {
  return (
    <nav className={s.navBarContainer}>
      <ul className={s.navbar}>
        {navList.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
};
