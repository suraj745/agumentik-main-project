import React from "react";
import styles from "../../../styles/AboutUs/comp/explorecard.module.scss";
import { motion } from "framer-motion";
const ExploreCard = ({ image, heading, paragraph, id }) => {
  return (
    <ul
      data-aos="fade-up"
      data-aos-delay={`${id * 300}`}
      className={styles.explore_card}
    >
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.card_content}>
        <ul>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.paragraph}>
            <p>{paragraph}</p>
          </li>
          <li className={`${styles.default_button} mt-5`}>
            <button className={styles.default}>Know More</button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ExploreCard;
