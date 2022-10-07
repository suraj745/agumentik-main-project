import React, { useState } from "react";
import styles from "../../styles/OpenTagStyle/statistic/statcard.module.scss";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatCard = ({ number, name, className, holder }) => {
  const [view, setView] = useState(false);

  return (
    <section className={className}>
      <ul className={styles.stat_card}>
        <motion.li
          className={styles.heading}
          whileInView={() => setView(true)}
          onViewportLeave={() => {
            setView(false);
          }}
        >
          <h1>
            <CountUp
              separator={","}
              start={view && 0}
              end={number}
              enableScrollSpy={true}
            />
            {holder}
          </h1>
        </motion.li>
        <li className={styles.paragraph}>
          <p>{name}</p>
        </li>
      </ul>
    </section>
  );
};

export default StatCard;
