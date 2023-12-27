import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../app/styles/ProductsHome.module.css";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 py-20 px-20 ">
      {products.map((product) => (
        <Link
          href={{ pathname: "/selectedproduct", query: { id: product.id } }}
          key={product.id}
        >
          <div className="border-[1px] border-gray-300">
            <img src={product.image} className={styles.image} alt="imag" />
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{product.title}</div>
            </div>
          </div>
          <button className="uppercase  border-[1px] border-blue-300 hover:text-blue-700">
            view product
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Products;
