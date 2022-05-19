import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { navbarTitle } from "DataBase/navbarTitle";

export const NavBar = () => {
  const activeClass = ({ isActive }) => (isActive ? s.active : s.navbar);
  return (
    <nav className={s.navBarContainer}>
      {navbarTitle.map((link) => (
        <NavLink
          className={activeClass}
          key={link.label}
          to={link.label === "Main" ? "/" : `/${link.label}`}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
