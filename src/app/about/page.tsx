import React from "react";
import styles from "./styles.module.scss";
import {
  Arch,
  ArrowDown,
  HeroImage,
  HeroText,
  Partners,
  SectionHeading,
  Spike,
  Stairs,
  ValueCards,
} from "../components";
import { KID_IMAGE } from "@/utils/images";

export const metadata = {
  title: "About Us | SolverEDGE",
  description: "Learn more about our company",
};

// app/about/page.js
export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.heroContainer}>
        <HeroText
          firstUnderLine={"About Us"}
          isSubText
          subText={
            "SolverEDGE Limited is backed by a team of experienced Educators, Technologists and Business Operators who have been operating an education company in Australia and Hong Kong for over 30 years, training students aged 3 -18 years old since 1991"
          }
          isBtn
          btnText={"explore courses"}
        />
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={KID_IMAGE}
            imgDescription="Kid with his arms crossed"
            variant="about"
          />
        </div>
      </section>
      <section className={styles.chooseUs}>
        <SectionHeading title={"Why choose us?"} star />
        <div className={styles.textWrap}>
          <p>
            <span>SolverEDGE</span> is a unique Learning Platform targeted to
            student and adult learners which diagnoses and improves Problem
            Solving ability. our training product has been developed based omn
            learnings of prior research in problem solving and intervention
            strategies with the University of Melbourne Assessment Research
            Centre by our founders. Our point of difference is the focus on
            identifying and remediating problem solving behavioural traits and
            capabilities. We utilise innovative AI technologies to understand
            and individualise training for every student.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <SectionHeading title={"Our Values"} diamond />
        <div className={styles.valueCards}>
          <ValueCards
            title={"Vision"}
            SvgComponent={<Spike className={styles.spike} />}
            text={
              "To be a global leader in diagnosing and remediating problem solving skills to improve desired outcomes"
            }
            bgColor={"#FFC70B"}
          />
          <ValueCards
            title={"Mission"}
            SvgComponent={<Stairs className={styles.stairs} />}
            text={
              "To revolutionise education by leveraging the latest technology to maximize individual improvement and achievement in preparation for future successs"
            }
            bgColor={"#17A38A"}
          />
          <ValueCards
            title={"Motto"}
            SvgComponent={<Arch className={styles.arch} />}
            text={
              "To be a global leader in diagnosing and remediating problem solving skills to improve desired outcomes"
            }
            bgColor={"#FE9D42"}
          />
        </div>
        <div className={styles.svgWrap}>
          <ArrowDown className={styles.arrowDown} />
        </div>
      </section>
      <section className={styles.partners}>
        <SectionHeading title={"Affiliate"} />
        <Partners />
      </section>
    </main>
  );
}
