"use client";

import { Button, Underline } from "../index";
import { useRouter } from "next/navigation";

import styles from "./styles.module.scss";

interface AIPoweredTextProps {
  prefixText?: string;
  underlinedWords: string[];
  suffixText?: string;
  description?: string;
  showButton?: boolean;
  btnText?: string;
  btnLink?: string;
}

const SecondHeroText = ({
  prefixText = "AI-Powered",
  underlinedWords = ["Problem", "Solving"],
  suffixText = "Training for All Learners",
  description = "SolverEDGE is an AI-powered learning platform that enhances problem-solving skills for students and adults. Developed with University of Melbourne research, it diagnoses behavioral traits and personalizes training to improve individual capabilities.",
  showButton = true,
  btnLink,
  btnText = "start training",
}: AIPoweredTextProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (btnLink) {
      router.push(btnLink);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.heroTextWrap}>
        <h1 className={styles.title}>
          {prefixText && (
            <span className={styles.inlineBlock}>{prefixText} </span>
          )}

          <span className={styles.underlineContainer}>
            {underlinedWords.map((word, index) => (
              <span key={index} className={styles.underlinedWord}>
                {word}
                <Underline className={styles.underlineSvg} />
              </span>
            ))}
          </span>

          {suffixText && (
            <span className={styles.inlineBlock}> {suffixText}</span>
          )}
        </h1>
      </div>

      {description && (
        <div className={styles.secondSubTxt}>
          <p>{description}</p>
          {showButton && (
            <div className={styles.btnWrap}>
              <Button text={`${btnText}`} onClick={handleClick} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecondHeroText;
