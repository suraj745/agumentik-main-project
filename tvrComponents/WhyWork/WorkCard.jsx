import React from "react";
import styles from "../../styles/TVR styles/WhyWork/workcard.module.scss";
import { motion } from "framer-motion";
const WorkCard = ({ icons, heading, paragraph }) => {
  return (
    <ul className={styles.whycard_container}>
      <li className={styles.icons}>
        <div className={styles.hexagono}>
          <motion.img
            src="/tvr-images/Layer 1.png"
            alt=""
            whileInView={{ scale: [1.2, 0.8, 1] }}
          />
          {icons}
        </div>
      </li>
      <li className={styles.heading}>
        <h1>{heading}</h1>
      </li>
      <li className={styles.paragraph}>
        <p>{paragraph}</p>
      </li>
    </ul>
  );
};

export default WorkCard;
