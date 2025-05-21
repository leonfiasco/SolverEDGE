import React from "react";
import {
  HeroText,
  HeroImage,
  SectionHeading,
  CurriculumList,
} from "../components";
import Image from "next/image";
import { BOOKS, MAZE } from "@/utils/images";
import styles from "./styles.module.scss";

export const metadata = {
  title: "Curriculum | SolverEDGE",
  description:
    "SolverEDGE focuses on training students in Problem Solving strategies ",
};

const Curriculum = () => {
  const strategies = [
    "Speed Reading",
    "The Power of checking",
    "Logic using diagrams",
    "Persistency",
    "Counting Techniques",
    "Statement Logic",
    "Simplify",
    "Mind Maps",
    "Draw a Table",
    "Guess & Check",
    "Make a List",
    "Working Backwards",
  ];

  const thinkingSkills = [
    "Strengthening an Argument",
    "Weakening an Argument",
    "Conditional Reasoning",
    "Venn Diagrams",
    "Drawing a Conclusion",
    "Bearings",
    "Weakening an Argument",
    "Statement Logic",
    "Evaluating a Conclusion",
    "Decision Making",
    "True or False",
    "Proposition and Conclusion",
    "Order of Sequence",
  ];
  return (
    <main className={styles.curriculum}>
      <section className={styles.heroSection}>
        <HeroText
          firstUnderLine={"Curriculum"}
          isSubText
          subText={
            "Enhance your child's academic edge with our Extra-Curricular Courses, designed to sharpen Analytical Reading, Problem-Solving Strategies, and Critical Thinking skills. Through our innovative learning platform, we equip students with proven methods to tackle challenges confidently and think more deeply. Elevate their learning experience with tools and skills that go beyond the classroom"
          }
        />
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={BOOKS}
            imgDescription="a boy reading a book"
            withSvg
            variant="curriculum"
          />
        </div>
      </section>
      <section className={styles.strategiesList}>
        <SectionHeading title={"Strategies"} star />
        <CurriculumList list={strategies} />
      </section>
      <section className={styles.thinkingList}>
        <SectionHeading title={"Thinking Skills"} diamond />
        <CurriculumList list={thinkingSkills} />
      </section>
      <section className={styles.footerImage}>
        <div className={styles.mazeWrap}>
          <Image
            src={MAZE}
            alt={"a maze image"}
            fill // This makes the image fill its container
            className={styles.maze}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </main>
  );
};

export default Curriculum;
