"use client";

import { useRouter } from "next/navigation"; // Note: In Next.js 13+, it's 'next/navigation' not 'next/router'
import { Button, Underline } from "../index";
import styles from "./styles.module.scss";

type props = {
  firstText?: string;
  secondText?: string;
  firstUnderLine?: string;
  secondUnderLine?: string;
  subText?: string;
  isSubText: boolean;
  btnText?: string;
  isBtn?: boolean;
  variant?: string;
  btnLink?: string; // Add a new prop for the link
};

const HeroText = ({
  firstText,
  secondText,
  firstUnderLine,
  secondUnderLine,
  subText,
  isSubText,
  btnText,
  isBtn,
  btnLink, // Default to contact page
  variant = "default",
}: props) => {
  const router = useRouter();

  const handleClick = () => {
    if (btnLink) {
      router.push(btnLink);
    }
  };

  return (
    <div className={`${styles.heroTextWrap} ${styles[variant]}`}>
      <h1 className={styles.title}>
        <span className={styles.titleLine}>{firstText}</span>
        <span className={styles.underlineContainer}>
          <span className={styles.underlinedWord}>
            {firstUnderLine}
            <Underline
              className={`${styles.underlineSvg} ${
                styles[`${variant}Underline`]
              }`}
            />
          </span>
          <span className={styles.underlinedWord}>
            {secondUnderLine}
            <Underline
              className={`${styles.underlineSvg} ${
                styles[`${variant}Underline`]
              }`}
            />
          </span>
        </span>
        <span className={styles.titleLine}>{secondText}</span>
      </h1>
      {isSubText && <p className={styles.subText}>{subText}</p>}
      {isBtn && <Button text={`${btnText}`} onClick={handleClick} />}
    </div>
  );
};

export default HeroText;
