import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import s from "./FormAddArticle.module.css";
import { EditorText } from "components/EditorText";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../redux/middleware/articlesPost";
import { addContent } from "../../redux/contentSlice";

export const FormAddArticle = () => {
  const dispatch = useDispatch();
  const [blockNav, setBlockNav] = useState("");
  const { content, categories } = useSelector((state) => state.contentReducer);

  const categoriesList = categories.find(
    (category) => category.blockMenuName === blockNav
  )?.category;
  const blockMenu = categories.map(({ blockMenuName }) => blockMenuName);

  const onFinish = (values) => {
    console.log("Received values of form: ", { ...values, content: content });
    dispatch(
      fetchPostData({
        data: { ...values, content: content },
      })
    );
    setBlockNav("");
    dispatch(addContent(""));
  };
  const handleSelectBlock = (value) => {
    setBlockNav(value);
  };
  console.log(categories);
  return (
    <Form onFinish={onFinish} name={"addArticleForm"} className={s.form}>
      <Form.Item
        name={"blockMenu"}
        className={s.select}
        label={"Выберите блок меню"}
      >
        <Select onChange={handleSelectBlock} placeholder={"Выберите блок меню"}>
          {blockMenu?.map((block) => (
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
          {categoriesList?.map((category) => (
            <Select.Option value={category.name} key={category.name}>
              {category.name}
            </Select.Option>
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
