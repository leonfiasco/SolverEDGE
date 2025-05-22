"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Button,
  HeroText,
  Underline,
  YoutubeVideo,
  Quote,
  ArrowSquiggle,
  HeroImage,
} from "../..";
import {
  GRAPH_IMAGE1,
  GRAPH_IMAGE2,
  HERO_IMAGE,
  HIGH_FIVE,
} from "@/utils/images";
import Image from "next/image";

import styles from "./page.module.scss";

// Minimal animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <main className={styles.home}>
      {/* Hero Section - Only adding fade animation */}
      <motion.section
        className={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={HERO_IMAGE}
            imgDescription="Thinking man image"
            withSvg
          />
        </div>
      </motion.section>

      {/* Video Section - Preserving all original structure */}
      <motion.section
        className={styles.videoSection}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className={styles.heroTextWrap}>
          <h1 className={styles.title}>
            <span className={styles.inlineBlock}>
              AI-Powered{" "}
              <motion.span
                className={styles.underlinedWord}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Problem
                <Underline className={styles.underlineSvg} />
              </motion.span>
            </span>
            <span className={styles.inlineBlock}>
              <motion.span
                className={styles.underlinedWord}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Solving
                <Underline className={styles.underlineSvg} />
              </motion.span>{" "}
              Training for All Learners
            </span>
          </h1>
        </div>

        <div className={styles.secondSubTxt}>
          <motion.div
            className={styles.arrowSquiggle}
            animate={{
              rotate: [0, 5, -5, 0],
              x: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute", // Maintains original positioning
              right: 0, // Original position
              top: 0, // Original position
            }}
          >
            <ArrowSquiggle className={styles.arrowSquiggle} />
          </motion.div>

          <p>
            <span>SolverEDGE</span> is an AI-powered learning platform that
            enhances problem-solving skills for students and adults. Developed
            with University of Melbourne research, it diagnoses behavioral
            traits and personalizes training to improve individual capabilities.
          </p>
          <motion.div
            className={styles.btnWrap}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button text="start training" />
          </motion.div>
        </div>

        <div className={styles.svgWrap}>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className={styles.arrowDown} />
          </motion.div>
        </div>

        <YoutubeVideo videoId={"AgPnZdM1ASI"} />

        <Quote className={styles.customColor}>
          <p>
            Strong performance in these skills enhance academics, critical
            thinking, patience and resilience
          </p>
        </Quote>
      </motion.section>

      {/* Graph Images - Adding subtle entrance */}
      <motion.section
        className={styles.graphImages}
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.test}>
          <Image
            src={GRAPH_IMAGE1}
            alt="Problem solving capabilities graph"
            fill
            className={styles.graphImage1}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.test}>
          <Image
            src={GRAPH_IMAGE2}
            alt="Problem solving capabilities graph"
            fill
            className={styles.graphImage2}
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.section>

      {/* Footer Image - Preserving exact layout */}
      <section className={styles.footerImage}>
        <div className={styles.imageWrap}>
          <Image
            src={HIGH_FIVE}
            alt="High-five"
            fill
            className={styles.highFive}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </main>
  );
}
