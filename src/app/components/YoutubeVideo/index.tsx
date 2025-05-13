import React from "react";
import styles from "./styles.module.scss";

interface YoutubeVideoProps {
  videoId: string;
  title?: string;
  aspectRatio?: string;
}

const YoutubeVideo = ({
  videoId = "AgPnZdM1ASI",
  title = "SolverEDGE Video",
  aspectRatio = "16/9",
}: YoutubeVideoProps) => {
  // Calculate padding-bottom percentage based on aspect ratio
  const [widthRatio, heightRatio] = aspectRatio.split("/").map(Number);
  const paddingBottom = `${(heightRatio / widthRatio) * 100}%`;

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper} style={{ paddingBottom }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
