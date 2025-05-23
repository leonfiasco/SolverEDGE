import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text }: { text: string }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
