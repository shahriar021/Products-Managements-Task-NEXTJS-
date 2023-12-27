import Link from "next/link";
import React from "react";

import styles from "../app/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainNavbar}>
      <div className={styles.leftNavPart}>
        <Link href="/">
          <span className={styles.spanColor}>Products</span>Shop
        </Link>
      </div>
      <div className={styles.rightNavPart}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
