"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroText, HeroImage, SectionHeading } from "../..";
import { LOGIN } from "@/utils/images";
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

const Login = () => {
  return (
    <motion.main
      className={styles.login}
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
              "Sign in to continue your problem-solving journey and access personalized training"
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
          <SectionHeading title={"Account Login"} star />
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </motion.div>

          <motion.div
            className={styles.formOptions}
            variants={formItemVariants}
          >
            <div className={styles.rememberMe}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </motion.div>

          <motion.button
            type="submit"
            className={styles.submitButton}
            variants={formItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>

          <motion.div
            className={styles.signupPrompt}
            variants={formItemVariants}
          >
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </motion.div>
        </motion.form>
      </motion.section>
    </motion.main>
  );
};

export default Login;
