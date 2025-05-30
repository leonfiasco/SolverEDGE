"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { HeroText } from "./components";
import styles from "./styles.module.scss";

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

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.main
      className={styles.notFound}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className={styles.heroSection} variants={itemVariants}>
        <HeroText
          firstText={"Page Not"}
          secondText={"Found"}
          firstUnderLine={"404"}
          isSubText
          subText={
            "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
          }
          isBtn
          btnText={"Return Home"}
          btnLink="/"
        />
      </motion.section>

      <motion.section
        className={styles.contentSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div className={styles.grid} variants={containerVariants}>
          <motion.div
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onClick={() => router.push("/")}
          >
            <span className={styles.icon}>🏠</span>
            <h3>Home Page</h3>
            <p>Return to our main platform</p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onClick={() => router.push("/contact")}
          >
            <span className={styles.icon}>📧</span>
            <h3>Contact Us</h3>
            <p>Get in touch with our team</p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onClick={() => window.history.back()}
          >
            <span className={styles.icon}>↩️</span>
            <h3>Go Back</h3>
            <p>Return to previous page</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div
        className={styles.backgroundElement}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      >
        <div className={styles.circle}></div>
      </motion.div>
    </motion.main>
  );
}
