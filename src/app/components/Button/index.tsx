import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
