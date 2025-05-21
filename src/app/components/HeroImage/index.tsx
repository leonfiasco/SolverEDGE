import React from "react";
import styles from "./styles.module.scss";

import { Cross, Square, Squiggle, Triangle } from "..";
import Image from "next/image";

type props = {
  image: string;
  imgDescription: string;
  imgClassName?: string;
  withSvg?: boolean;
  variant?: string;
};

const HeroImage = ({
  image,
  imgDescription,
  imgClassName,
  withSvg,
  variant,
}: props) => {
  return (
    <div className={`${styles.heroImage} ${variant ? styles[variant] : null}`}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={imgDescription}
          fill
          className={imgClassName ? styles[imgClassName] : undefined}
          style={{ objectFit: "contain" }}
        />
      </div>
      {withSvg && (
        <div className={styles.svgWrap}>
          <Cross className={styles.cross} />
          <Square className={styles.square} />
          <Squiggle className={styles.squiggle} />
          <Triangle className={styles.triangle} />
        </div>
      )}
    </div>
  );
};

export default HeroImage;
