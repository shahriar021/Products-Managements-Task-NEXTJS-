import Link from "next/link";
import React from "react";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainNavbar}>
      <div className={styles.leftNavPart}>ProductsShop</div>
      <div className={styles.centerNavPart}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="rightNavPart">Profile</div>
    </div>
  );
};

export default Navbar;
