import React from "react";
import {
  HeroText,
  HeroImage,
  SectionHeading,
  Publications,
} from "../components";
import { BRAIN_IMAGE, ROCKET } from "@/utils/images";
import Image from "next/image";
import styles from "./styles.module.scss";

export const metadata = {
  title: "Product | SolverEDGE",
  description: "Master your skills to excel academically and professionally",
};

const Product = () => {
  return (
    <main className={styles.product}>
      <section className={styles.heroSection}>
        <HeroText
          firstUnderLine={"Product"}
          isSubText
          subText={
            "Master your skills to excel academically and professionally"
          }
        />
        <div className={styles.heroImageContainer}>
          <HeroImage
            image={BRAIN_IMAGE}
            imgDescription="Brain storm"
            withSvg
            variant="product"
          />
        </div>
      </section>
      <section className={styles.ourProduct}>
        <SectionHeading title={"How Our Product Works"} star />
        <div className={styles.graphWrap}>
          <Image
            src={"/images/product-graph.png"}
            alt={"product graph"}
            fill // This makes the image fill its container
            priority
            className={styles.graph}
            sizes="100vw" // Helps with responsive sizing
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={ROCKET}
            alt="High-five"
            width={150} // Explicit width
            height={150} // Explicit height
            className={styles.highFive}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
      <section className={styles.theory}>
        <SectionHeading title={"Theory & Research"} diamond />
        <h4 className={styles.subTitle}>
          Research conducted with The University of Melbourne’s Assessment
          Research Centre
        </h4>
        <Publications />
      </section>
    </main>
  );
};

export default Product;
