import React from "react";
import { Form, Input, Select, Button } from "antd";
import s from "./FormAddArticle.module.css";
import { EditorText } from "components/EditorText";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../redux/middleware/articlesPost";
import { addContent } from "../../redux/contentSlice";

const categories = [
  { name: "Главная страница" },
  { name: "Новости" },
  { name: "Контакты" },
  { name: "Интересное о пчелах" },
  { name: "Продукты пчеловодства" },
];
const blockMenu = ["navbar", "asideMenu"];
export const FormAddArticle = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.contentReducer);
  const onFinish = (values) => {
    console.log("Received values of form: ", { ...values, content: content });
    dispatch(
      fetchPostData({
        data: { ...values, content: content },
      })
    );
    dispatch(addContent(""));
  };
  return (
    <Form onFinish={onFinish} name={"addArticleForm"} className={s.form}>
      <Form.Item
        name={"blockMenu"}
        className={s.select}
        label={"Выберите блок меню"}
      >
        <Select placeholder={"Выберите блок меню"}>
          {blockMenu.map((block) => (
            <Select.Option key={block}>{block}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name={"category"}
        className={s.select}
        label={"Выберите раздел"}
      >
        <Select placeholder={"Выберите категорию"}>
          {categories.map((category) => (
            <Select.Option key={category.name}>{category.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name={"title"} className={s.input} label={"Название статьи"}>
        <Input />
      </Form.Item>
      <EditorText />
      <Form.Item className={s.button}>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          Сохранить статью
        </Button>
      </Form.Item>
    </Form>
  );
};
