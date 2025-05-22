"use client"; // Required for Framer Motion

import { motion } from "framer-motion";
import { HeroText, HeroImage, SectionHeading, Publications } from "../..";
import { BRAIN_IMAGE, ROCKET } from "@/utils/images";
import Image from "next/image";
import styles from "./styles.module.scss";

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

const Product = () => {
  return (
    <motion.main
      className={styles.product}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Hero Section */}
      <motion.section className={styles.heroSection} variants={fadeIn}>
        <HeroText
          firstUnderLine={"Product"}
          isSubText
          subText={
            "Master your skills to excel academically and professionally"
          }
        />
        <motion.div
          className={styles.heroImageContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HeroImage
            image={BRAIN_IMAGE}
            imgDescription="Brain storm"
            withSvg
            variant="product"
          />
        </motion.div>
      </motion.section>

      {/* Product Section */}
      <motion.section
        className={styles.ourProduct}
        variants={container}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={slideUp}>
          <SectionHeading title={"How Our Product Works"} star />
        </motion.div>

        <motion.div
          className={styles.graphWrap}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={"/images/product-graph.png"}
            alt={"product graph"}
            fill
            priority
            className={styles.graph}
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            src={ROCKET}
            alt="Rocket"
            width={150}
            height={150}
            className={styles.highFive}
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </motion.section>

      {/* Theory Section */}
      <motion.section
        className={styles.theory}
        variants={container}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={slideUp}>
          <SectionHeading title={"Theory & Research"} diamond />
        </motion.div>

        <motion.h4 className={styles.subTitle} variants={slideUp}>
          Research conducted with The University of Melbourne&apos;s Assessment
          Research Centre
        </motion.h4>

        <motion.div variants={fadeIn}>
          <Publications />
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Product;
