import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./styles.module.scss";

const Partners = () => {
  const partners = [
    { src: "/images/anthony.png", alt: "Anthony Logo" },
    { src: "/images/cyberport.png", alt: "Cyberport Logo" },
    { src: "/images/north-shore.png", alt: "North Shore Logo" },
  ];

  return (
    <Marquee className={styles.marquee} speed={25}>
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.src}
          alt={partner.alt}
          width={172}
          height={94}
          priority
          className={styles.marqueeImage}
        />
      ))}
    </Marquee>
  );
};

export default Partners;
