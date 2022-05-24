import React from "react";
import { Header } from "components/Header";
import { AsideBlockMenu } from "components/AsideBlockMenu";
import { NavBar } from "components/NavBar";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { useSelector } from "react-redux";

export const Layout = () => {
  const { categories } = useSelector((state) => state.contentReducer);
  const menuAside = categories.find(
    (category) => category.blockMenuName === "menuAside"
  );

  return (
    <div className={s.container}>
      <Header />
      <NavBar />
      <aside>
        {menuAside?.category?.map((menu) => (
          <AsideBlockMenu key={menu._id} item={menu} />
        ))}
      </aside>
      <Outlet />
    </div>
  );
};
