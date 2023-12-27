"use client";
import React from "react";
import { Slide } from "react-awesome-reveal";

import styles from "../styles/About.module.css";

const Page = () => {
  return (
    <div>
      <Slide direction="down">
        <p className={styles.aboutTitle}>We are productsShop.</p>
      </Slide>
      <Slide direction="up">
        <p className={styles.aboutDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis
          cumque harum, aut hic alias? Nemo, optio rerum facilis voluptatem,
          nulla sunt nobis adipisci, necessitatibus quod exercitationem fugiat?
          Non error exercitationem sit in illum minima voluptatibus nihil
          delectus, porro omnis molestias, similique dicta iste veritatis
          dolorum repudiandae dignissimos qui. Nemo dicta, quisquam, sit odit
          maiores fugiat quos ea dolor, magni animi ex tempora voluptatibus sed
          quod doloribus minima impedit alias.
        </p>
      </Slide>
      <div className={styles.aboutLowerPart}>
        <Slide direction="left">
          <p className={styles.aboutFirstOfLowerPart}>we provide</p>
        </Slide>
        <Slide direction="right">
          <p className={styles.aboutLastOfLowerPart}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            sint. Tempora enim dolore natus necessitatibus dicta possimus
            incidunt ratione vitae ad repellendus unde labore omnis ex, magni
            nesciunt odit. Commodi?
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Page;
