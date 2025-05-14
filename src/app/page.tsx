import {
  ArrowDown,
  Button,
  Cross,
  HeroText,
  Square,
  Squiggle,
  ThinkingMan,
  Triangle,
  Underline,
  YoutubeVideo,
  Quote,
} from "./components";
import { GRAPH_IMAGE1, GRAPH_IMAGE2 } from "@/utils/images";
import Image from "next/image";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.container}>
        <HeroText
          firstText={"Diagnose & Improve"}
          secondText={"Capabilities"}
          firstUnderLine={"Problem"}
          secondUnderLine={"Solving"}
          isSubText
          subText={"Individualised Learning Platform"}
          isBtn
          btnText={"get started"}
        />
        <div className={styles.svgWrap}>
          <Cross className={styles.cross} />
          <Square className={styles.square} />
          <Squiggle className={styles.squiggle} />
          <Triangle className={styles.triangle} />
          <ThinkingMan className={styles.thinkingMan} />
        </div>
      </section>
      <section className={styles.videoSection}>
        <div className={styles.heroTextWrap}>
          <h1 className={styles.title}>
            <span className={styles.inlineBlock}>
              AI-Powered{" "}
              <span className={styles.underlinedWord}>
                Problem
                <Underline className={styles.underlineSvg} />
              </span>
            </span>
            <span className={styles.inlineBlock}>
              <span className={styles.underlinedWord}>
                Solving
                <Underline className={styles.underlineSvg} />
              </span>{" "}
              Training for All Learners
            </span>
          </h1>
        </div>
        <div className={styles.secondSubTxt}>
          <p>
            SolverEDGE is an AI-powered learning platform that enhances
            problem-solving skills for students and adults. Developed with
            University of Melbourne research, it diagnoses behavioral traits and
            personalizes training to improve individual capabilities.
          </p>
          <div className={styles.btnWrap}>
            <Button text="start training" />
          </div>
        </div>
        <div className={styles.svgWrap}>
          <ArrowDown className={styles.arrowDown} />
        </div>
        <YoutubeVideo videoId={"AgPnZdM1ASI"} />
        <Quote className={styles.customColor}>
          <p>
            Strong performance in these skills enhance academics, critical
            thinking, patience and resilience
          </p>
        </Quote>
      </section>
      <section className={styles.graphImages}>
        <div>
          <Image
            src={GRAPH_IMAGE1}
            alt="Problem solving capabilities graph"
            width={500} // set appropriate dimensions
            height={300}
            className={styles.graphImage1}
          />
        </div>
        <div>
          <Image
            src={GRAPH_IMAGE2}
            alt="Problem solving capabilities graph"
            width={500} // set appropriate dimensions
            height={300}
            className={styles.graphImage2}
          />
        </div>
      </section>
    </main>
  );
}
