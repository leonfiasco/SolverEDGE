"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroText, HeroImage, SectionHeading, Button } from "../..";
import { CONTACT } from "@/utils/images";
import styles from "./styles.module.scss";

export const metadata = {
  title: "Contact | SolverEDGE",
  description: "Get in touch with the SolverEDGE team",
};

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

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "backOut",
    },
  }),
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

const Contact = () => {
  const contactMethods = [
    {
      type: "Email",
      value: "info@solveredge.com",
      icon: "✉️",
    },
    {
      type: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
    },
    {
      type: "Address",
      value: "123 Education St, Melbourne, Australia",
      icon: "📍",
    },
    {
      type: "Social",
      value: "@solveredge",
      icon: "💬",
      link: "https://www.linkedin.com/company/solveredge/",
    },
  ];

  return (
    <motion.main
      className={styles.contact}
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
            firstUnderLine={"Contact Us"}
            isSubText
            subText={
              "Have questions or want to learn more about our platform? Reach out through any of these channels and we'll get back to you promptly."
            }
          />
        </motion.div>

        <motion.div
          className={styles.heroImageContainer}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HeroImage
            image={CONTACT}
            imgDescription="a phone with different contact methods"
            withSvg
            variant="contact"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.contactMethods}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading title={"Ways to Connect"} star />
        </motion.div>

        <motion.div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className={styles.methodCard}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span className={styles.icon}>{method.icon}</span>
              <h3>{method.type}</h3>
              <p>{method.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.formSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={formVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionHeading title={"Send a Message"} diamond />
        </motion.div>

        <motion.form className={styles.contactForm} variants={formVariants}>
          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <input type="text" id="name" placeholder="Name..." required />
          </motion.div>
          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <input type="email" id="email" placeholder="Email..." required />
          </motion.div>
          <motion.div className={styles.formGroup} variants={formItemVariants}>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Message..."
            ></textarea>
          </motion.div>
          <motion.div
            className={styles.submitButton}
            variants={formItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text={"Send Message"} />
          </motion.div>
        </motion.form>
      </motion.section>
    </motion.main>
  );
};

export default Contact;
