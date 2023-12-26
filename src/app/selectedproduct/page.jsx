import React from "react";
import { getSelectedProduct } from "@/helpers/pages";
import styles from "../styles/ProductsHome.module.css";

const page = async ({ searchParams }) => {
  const forType = searchParams.id;
  console.log(typeof forType);
  const id = Number(searchParams.id);
  const product = await getSelectedProduct(id);

  return (
    <div>
      <img src={product.image} className={styles.image} alt="imag" />
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>{product.ratting}</div>
    </div>
  );
};

export default page;
