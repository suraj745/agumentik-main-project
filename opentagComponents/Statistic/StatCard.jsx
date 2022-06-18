import React from "react";
import styles from "../../styles/OpenTagStyle/statistic/statcard.module.scss";
import { motion } from "framer-motion";
const StatCard = ({ number, name, className }) => {
  return (
    <section className={className}>
      <ul className={styles.stat_card}>
        <li className={styles.heading}>
          <h1>{number}</h1>
        </li>
        <li className={styles.paragraph}>
          <p>{name}</p>
        </li>
      </ul>
    </section>
  );
};

export default StatCard;
