import React from "react";
import style from "./ProductBeeKeeping.module.css";
const productBeeKeeping = ["Мед", "Забрус", "Маточное молочко"];
export const ProductBeeKeeping = () => {
  return (
    <ul>
      <h3>Продукты пчеловодства</h3>
      {productBeeKeeping.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
};
