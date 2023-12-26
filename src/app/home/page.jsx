"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/ProductsHome.module.css";

import layout from "../layout";
import Link from "next/link";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const userAPI = `https://fakestoreapi.com/products`;

  const getData = async () => {
    const info = await axios.get(userAPI);
    setData(info.data);
    setLoading(false);
    console.log(info.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <layout>
      <div>
        {loading && <h1>Loading this page...</h1>}
        {data &&
          data.map((product) => (
            <div>
              <Link href={`/product/${product.id}`}  key={product.id}>
                <div className={styles.Card}>
                  <img
                    src={product.image}
                    className={styles.image}
                    alt="imag"
                  />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{product.title}</div>
                  </div>
                  View Product
                </div>
              </Link>
            </div>
          ))}
      </div>
    </layout>
  );
};

export default HomePage;
