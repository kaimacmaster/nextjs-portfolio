import React, { FunctionComponent } from "react";
import styles from "./LoadingDots.module.css";

const LoadingDots: FunctionComponent = () => {
  return (
    <span className={styles.root}>
      <span className={styles.dot} key={`dot_1`} />
      <span className={styles.dot} key={`dot_2`} />
      <span className={styles.dot} key={`dot_3`} />
    </span>
  );
};

export default LoadingDots;
