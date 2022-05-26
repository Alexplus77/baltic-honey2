import React from "react";
import { Form, Select, Button, Input } from "antd";
import s from "components/FormAddArticle/FormAddArticle.module.css";
import { fetchAddCategory } from "redux/middleware/articlesPost";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "redux/contentSlice";

export const FormAddCategory = () => {
  const dispatch = useDispatch();
  const { blockMenu } = useSelector((state) => state.contentReducer);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(fetchAddCategory(values));
    dispatch(addContent(""));
  };

  return (
    <Form onFinish={onFinish} name={"addCategory"} className={s.form}>
      <Form.Item name={"menuBlock"} label={"Выберите блок меню"}>
        <Select>
          {blockMenu?.map((block) => (
            <Select.Option key={block._id}>{block.title}</Select.Option>
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
