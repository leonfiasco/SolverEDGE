import React from "react";
import { QuoteLeft, QuoteRight } from "../index";
import styles from "./styles.module.scss";

interface QuoteProps {
  children: React.ReactNode; // Changed from string
  className?: string;
}

const Quote = ({
  children,

  className = "",
}: QuoteProps) => {
  return (
    <div className={`${styles.quoteContainer} ${className}`}>
      <div className={styles.quoteWrapper}>
        <QuoteLeft className={styles.quoteMarkLeft} />

        <div className={styles.quoteContent}>{children}</div>

        <QuoteRight className={styles.quoteMarkRight} />
      </div>
    </div>
  );
};

export default Quote;
