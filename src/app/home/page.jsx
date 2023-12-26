"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import layout from "../layout";

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
        {loading && <h1>loading this page..</h1>}
        {data &&
          data.map((data, i) => {
            return <h2 key={data.id}>{data.price}</h2>;
          })}
      </div>
    </layout>
  );
};

export default HomePage;
