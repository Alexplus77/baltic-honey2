import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { navbarTitle } from "DataBase/navbarTitle";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const activeClass = ({ isActive }) => (isActive ? s.active : s.navbar);
  const { categories } = useSelector((state) => state.contentReducer);

  const menuNavbar = categories.find(
    (category) => category.blockMenuName === "navbar"
  );

  return (
    <nav className={s.navBarContainer}>
      {menuNavbar?.category?.map((link) => (
        <NavLink
          className={activeClass}
          key={link._id}
          to={link.name === "Main" ? "/" : `/${link.name}`}
        >
          {link.name}
        </NavLink>
      ))}
      <NavLink className={activeClass} to={"/administrator"}>
        AdminPanel
      </NavLink>
    </nav>
  );
};
