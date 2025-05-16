import React from "react";
import styles from "./styles.module.scss";

type props = {
  SvgComponent: React.ReactNode;
  title: string;
  text: string;
  bgColor: string;
};

const ValueCards = ({ SvgComponent, title, text, bgColor }: props) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.svgWrap}>{SvgComponent}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ValueCards;
