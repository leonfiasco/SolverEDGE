"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroText, HeroImage, SectionHeading } from "../..";
import { LOGIN } from "@/utils/images";
import styles from "./styles.module.scss";

// Reusing the same animation variants from Login
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

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const formItemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Signup = () => {
  return (
    <motion.main
      className={styles.signup}
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
            firstUnderLine={"Welcome Back"}
            isSubText
            subText={
              "Sign up to continue your problem-solving journey and access personalized training"
            }
            variant="login"
          />
        </motion.div>

        <motion.div
          className={styles.heroImageContainer}
          variants={itemVariants}
        >
          <HeroImage
            image={LOGIN}
            imgDescription="Login illustration"
            withSvg
            variant="login"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.loginFormSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={formVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading title={"Account Sign-up"} star />
        </motion.div>

        <motion.form className={styles.loginForm} variants={formVariants}>
          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
            />
          </motion.div>

          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <label htmlFor="email">Email confirmation</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
            />
          </motion.div>

          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </motion.div>

          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <label htmlFor="password">Password confirmation</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className={styles.submitButton}
            variants={formItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>

          <motion.div
            className={styles.signupPrompt}
            variants={formItemVariants}
          >
            Already have an account? <a href="/login">Login</a>
          </motion.div>
        </motion.form>
      </motion.section>
    </motion.main>
  );
};

export default Signup;
