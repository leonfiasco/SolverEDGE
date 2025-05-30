import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ANTHONY, CYBER, NORTH } from "../../../utils/images";

const Partners = () => {
  const partners = [
    { src: ANTHONY, alt: "Anthony Logo" },
    { src: CYBER, alt: "Cyberport Logo" },
    { src: NORTH, alt: "North Shore Logo" },
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
