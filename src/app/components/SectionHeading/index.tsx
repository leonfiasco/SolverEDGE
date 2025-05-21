import React from "react";
import { Star, Scribble, Diamond } from "../";

import styles from "./styles.module.scss";

type props = {
  title: string;
  star?: boolean;
  diamond?: boolean;
};

const SectionHeading = ({ title, star, diamond }: props) => {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.titleWrapper}>
        {star ? (
          <Star className={`${styles.star} ${styles.starLeft}`} />
        ) : diamond ? (
          <Diamond className={`${styles.diamond} ${styles.diamondLeft}`} />
        ) : null}
        <h3 className={styles.title}>{title}</h3>
        {star ? (
          <Star className={`${styles.star} ${styles.starRight}`} />
        ) : diamond ? (
          <Diamond className={`${styles.diamond} ${styles.diamondRight}`} />
        ) : null}
      </div>
      <div className={styles.underlineContainer}>
        <Scribble className={styles.underline} />
      </div>
    </div>
  );
};
export default SectionHeading;
