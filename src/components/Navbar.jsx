import Link from "next/link";
import React from "react";

import styles from "../app/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainNavbar}>
      <div className={styles.leftNavPart}>ProductsShop</div>
      <div className={styles.centerNavPart}>
        <Link href="/">basic</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="rightNavPart">Profile</div>
    </div>
  );
};

export default Navbar;
