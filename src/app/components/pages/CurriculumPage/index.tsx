"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroText, HeroImage, SectionHeading, CurriculumList } from "../..";
import Image from "next/image";
import { BOOKS, MAZE } from "@/utils/images";
import styles from "./styles.module.scss";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "anticipate",
    },
  },
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
    <motion.main
      className={styles.curriculum}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        className={styles.heroSection}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <HeroText
            firstUnderLine={"Curriculum"}
            isSubText
            subText={
              "Enhance your child's academic edge with our Extra-Curricular Courses, designed to sharpen Analytical Reading, Problem-Solving Strategies, and Critical Thinking skills. Through our innovative learning platform, we equip students with proven methods to tackle challenges confidently and think more deeply. Elevate their learning experience with tools and skills that go beyond the classroom"
            }
          />
        </motion.div>

        <motion.div
          className={styles.heroImageContainer}
          variants={imageVariants}
        >
          <HeroImage
            image={BOOKS}
            imgDescription="a boy reading a book"
            withSvg
            variant="curriculum"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.strategiesList}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading title={"Strategies"} star />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CurriculumList list={strategies} />
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.thinkingList}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading title={"Thinking Skills"} diamond />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CurriculumList list={thinkingSkills} />
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.footerImage}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.mazeWrap} variants={imageVariants}>
          <Image
            src={MAZE}
            alt={"a maze image"}
            fill
            className={styles.maze}
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Curriculum;
