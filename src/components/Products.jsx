import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../app/styles/ProductsHome.module.css";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Link
          href={{ pathname: "/selectedproduct", query: { id: product.id } }}
          key={product.id}
        >
          <div>
            <img src={product.image} className={styles.image} alt="imag" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{product.title}</div>
            </div>
            <button className="uppercase hover:text-blue-700">
              view product
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
