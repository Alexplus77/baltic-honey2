import React from "react";
import { Header } from "components/Header";
import { ProductBeeKeeping } from "components/ProductBeerKeeping";
import { NavBar } from "components/NavBar";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <NavBar />
      <aside>
        <ProductBeeKeeping />
      </aside>
      <Outlet />
    </div>
  );
};
