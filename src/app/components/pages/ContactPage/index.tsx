"use client";

import { motion } from "framer-motion";

import { HeroText, HeroImage, SectionHeading } from "../..";
import { CONTACT } from "@/utils/images";
import styles from "./styles.module.scss";

interface ContactMethod {
  type: string;
  value: string;
  icon: string;
  link?: string;
  href?: string;
}

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

const Contact = () => {
  const contactMethods: ContactMethod[] = [
    {
      type: "Email",
      value: "info@solveredge.com",
      icon: "✉️",
      href: `mailto:info@solveredge.com`,
    },
    {
      type: "Phone",
      value: "+85266235524",
      icon: "📞",
      href: `tel:+85266235524`,
    },
    {
      type: "Address",
      value: "Kwai Hung Holdings Centre, 89 King's Road, Causeway",
      icon: "📍",
      link: "https://maps.google.com/?q=Kwai+Hung+Holdings+Centre,+89+King's+Road,+Causeway",
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
              onClick={() => {
                if (method.link) window.open(method.link, "_blank");
                if (method.href) window.location.href = method.href;
              }}
              style={{
                cursor: method.link || method.href ? "pointer" : "default",
              }}
            >
              <span className={styles.icon}>{method.icon}</span>
              <h3>{method.type}</h3>
              <p>{method.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Contact;
