// app/contact/page.tsx
import React from "react";
import { HeroText, HeroImage, SectionHeading, Button } from "../components";
import { CONTACT } from "@/utils/images";
import styles from "./styles.module.scss";

export const metadata = {
  title: "Contact | SolverEDGE",
  description: "Get in touch with the SolverEDGE team",
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
    <main className={styles.contact}>
      <section className={styles.heroSection}>
        <HeroText
          firstUnderLine={"Contact Us"}
          isSubText
          subText={
            "Have questions or want to learn more about our platform? Reach out through any of these channels and we'll get back to you promptly."
          }
        />
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={CONTACT}
            imgDescription="a phone with different contact methods"
            withSvg
            variant="contact"
          />
        </div>
      </section>

      <section className={styles.contactMethods}>
        <SectionHeading title={"Ways to Connect"} star />
        <div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.methodCard}>
              <span className={styles.icon}>{method.icon}</span>
              <h3>{method.type}</h3>
              <p>{method.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.formSection}>
        <SectionHeading title={"Send a Message"} diamond />
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" id="name" placeholder="Name..." required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" placeholder="Email..." required />
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Message..."
            ></textarea>
          </div>
          <div className={styles.submitButton}>
            <Button text={"Send Message"} />
          </div>
        </form>
      </section>

      {/* <section className={styles.footerImage}>
        <div className={styles.mazeWrap}>
          <Image
            src={MAZE}
            alt={"a maze image"}
            fill
            className={styles.maze}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section> */}
    </main>
  );
};

export default Contact;
