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
  };
  return (
    <Form onFinish={onFinish} name={"addArticleForm"} className={s.form}>
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
      <Form.Item className={s.button}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <EditorText />
    </Form>
  );
};
