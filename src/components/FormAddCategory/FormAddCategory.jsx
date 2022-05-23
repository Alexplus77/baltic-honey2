import React from "react";
import { Form, Select, Button, Input } from "antd";
import s from "../FormAddArticle/FormAddArticle.module.css";
import { fetchAddCategory } from "../../redux/middleware/articlesPost";
import { useDispatch } from "react-redux";
import { addContent } from "../../redux/contentSlice";
const blockMenu = ["navbar", "menuAside"];
export const FormAddCategory = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(fetchAddCategory(values));
    dispatch(addContent(""));
  };
  return (
    <Form onFinish={onFinish} name={"addCategory"} className={s.form}>
      <Form.Item name={"menuBlock"} label={"Выберите блок меню"}>
        <Select>
          {blockMenu.map((block) => (
            <Select.Option key={block}>{block}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name={"category"} label={"Название раздела"}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type={"primary"} htmlType={"submit"}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
