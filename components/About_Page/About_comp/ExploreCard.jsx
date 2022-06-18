import React from "react";
import styles from "../../../styles/AboutUs/comp/explorecard.module.scss";
const ExploreCard = ({ image, heading, paragraph }) => {
  return (
    <ul className={styles.explore_card}>
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
          <li className={styles.default_button}>
            <button className={styles.default}>Know More</button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ExploreCard;
