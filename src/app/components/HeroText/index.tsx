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
}: props) => {
  return (
    <div className={styles.heroTextWrap}>
      <h1 className={styles.title}>
        <span className={styles.titleLine}>{firstText}</span>
        <span className={styles.underlineContainer}>
          <span className={styles.underlinedWord}>
            {firstUnderLine}
            <Underline className={styles.underlineSvg} />
          </span>
          <span className={styles.underlinedWord}>
            {secondUnderLine}
            <Underline className={styles.underlineSvg} />
          </span>
        </span>
        <span className={styles.titleLine}>{secondText}</span>
      </h1>
      {isSubText && <p className={styles.subText}>{subText}</p>}
      {isBtn && <Button text={`${btnText}`} />}
    </div>
  );
};

export default HeroText;
