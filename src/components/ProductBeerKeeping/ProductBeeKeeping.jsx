import React from "react";
import s from "./ProductBeeKeeping.module.css";
const productBeeKeeping = ["Мед", "Забрус", "Маточное молочко"];
export const ProductBeeKeeping = () => {
  return (
    <div className={s.container}>
      <ul>
        <h3>Продукты пчеловодства</h3>
        {productBeeKeeping.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};
