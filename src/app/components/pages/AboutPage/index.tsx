"use client";

import { motion } from "framer-motion";
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
} from "../..";
import { KID_IMAGE } from "@/utils/images";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function About() {
  return (
    <motion.main
      className={styles.about}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Hero Section */}
      <motion.section className={styles.heroContainer} variants={fadeIn}>
        <HeroText
          firstUnderLine={"About Us"}
          isSubText
          subText={
            "SolverEDGE Limited is backed by a team of experienced Educators..."
          }
          isBtn
          btnText={"explore courses"}
          btnLink="https://problemsolving.solveredge.com/"
        />
        <motion.div
          className={styles.heroImageContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HeroImage
            image={KID_IMAGE}
            imgDescription="Kid with his arms crossed"
            variant="about"
            withSvg
          />
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className={styles.chooseUs}
        variants={container}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={slideUp}>
          <SectionHeading title={"Why choose us?"} star />
        </motion.div>
        <motion.div className={styles.textWrap} variants={slideUp}>
          <p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              SolverEDGE
            </motion.span>{" "}
            is a unique Learning Platform targeted to student and adult learners
            which diagnoses and improves Problem Solving ability. our training
            product has been developed based omn learnings of prior research in
            problem solving and intervention strategies with the University of
            Melbourne Assessment Research Centre by our founders. Our point of
            difference is the focus on identifying and remediating problem
            solving behavioural traits and capabilities. We utilise innovative
            AI technologies to understand and individualise training for every
            student.
          </p>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className={styles.values}
        variants={container}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={slideUp}>
          <SectionHeading title={"Our Values"} diamond />
        </motion.div>

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
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className={styles.partners}
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeading title={"Affiliates"} />
        <Partners />
      </motion.section>
    </motion.main>
  );
}
