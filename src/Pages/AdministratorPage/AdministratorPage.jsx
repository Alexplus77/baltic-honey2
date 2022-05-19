import React, { useState } from "react";
import s from "./AdministratorPage.module.css";
import { EditorText } from "components/EditorText";
import { navbarTitle, asideList } from "DataBase/navbarTitle";
import { Button, Cascader } from "antd";

const list = [
  { value: "aside", label: "aside", children: asideList },
  { value: "navbar", label: "navbar", children: navbarTitle },
];

export const AdministratorPage = () => {
  const onChange = (value) => {};

  return (
    <main>
      <div className={s.cascaderContainer}>
        <h1>Панель управления контентом</h1>
        <div className={s.btnsContainer}>
          <Button type={"primary"}>Edit navbar</Button>
          <Button type={"primary"}>Edit aside</Button>
        </div>
      </div>
      <EditorText />
    </main>
  );
};
