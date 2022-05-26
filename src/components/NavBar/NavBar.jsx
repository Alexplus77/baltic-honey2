import React, { useEffect } from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetCategoriesMenu } from "../../redux/middleware/articlesPost";

export const NavBar = () => {
  const dispatch = useDispatch();
  const activeClass = ({ isActive }) => (isActive ? s.active : s.navbar);
  const { categories, categoriesMenu, blockMenu } = useSelector(
    (state) => state.contentReducer
  );
  const menuNavbar = categories.filter(
    (category) => category.blockMenu.title === "navbar"
  );

  console.log(categories, menuNavbar);

  return (
    <nav className={s.navBarContainer}>
      {menuNavbar.map((link) => (
        <NavLink
          className={activeClass}
          key={link.title}
          to={link.title === "Main" ? "/" : `/${link.title}/${link.title}`}
        >
          {link.title}
        </NavLink>
      ))}
      <NavLink className={activeClass} to={"/administrator"}>
        AdminPanel
      </NavLink>
    </nav>
  );
};
