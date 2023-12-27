import React from "react";

import styles from "../styles/Contact.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.section}>
        <section className={styles.firstSection}>Get in touch!</section>
      </div>
      <div className={styles.contactBody}>
        <div className={styles.contactMetarials}>
          <h3 className={styles.contactUS}>contact us</h3>
          <h5 className={styles.contactNmbr}>00998745</h5>
          <h5 className={styles.contactEmail}>product@gmail.com</h5>
          <h5 className={styles.contactADD}>Gulshan,Dhaka</h5>
        </div>
        <div className={styles.inputBox}>
          <input placeholder="your email" />
          <input placeholder="your number" />
          <input placeholder="say anything" />
          <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default page;
