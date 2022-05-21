import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./AdministratorPage.module.css";
import { EditorText } from "components/EditorText";
import { FormAddArticle } from "components/FormAddArticle";
import { navbarTitle, asideList } from "DataBase/navbarTitle";
import { Button, Cascader } from "antd";

const list = [
  { value: "aside", label: "aside", children: asideList },
  { value: "navbar", label: "navbar", children: navbarTitle },
];

export const AdministratorPage = () => {
  const onChange = (value) => {};
  const { content } = useSelector((state) => state.contentReducer);

  return (
    <main>
      <div className={s.cascaderContainer}>
        {/*<div dangerouslySetInnerHTML={{ __html: content }} />*/}
        <h1>Панель управления контентом</h1>
        <div className={s.btnsContainer}>
          <Button type={"primary"}>Добавить раздел в боковое меню</Button>
          <Button type={"primary"}>Добавить статью</Button>
        </div>
        <FormAddArticle />
      </div>
    </main>
  );
};
