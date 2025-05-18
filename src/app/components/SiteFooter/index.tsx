import React from "react";
import styles from "./styles.module.scss";

const SiteFooter = () => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p>Copyright SolverEDGE {date.getFullYear()} All rights reserved.</p>
      <p>LoneSq: Design & Build</p>
    </footer>
  );
};

export default SiteFooter;
