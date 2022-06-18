import React from "react";
import styles from "../../styles/OpenTagStyle/home/team/teamcard.module.scss";
import { motion } from "framer-motion";
const TeamCard = ({ image, heading, paragraph, className }) => {
  return (
    <section className={className}>
      <ul className={styles.team_card}>
        <li className={styles.image}>
          <motion.img
            src={image}
            alt=""
            className={styles.main_image}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4, ease: "linear" },
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/opentag-image/dot.png"
            alt=""
            className={"dot"}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.8, ease: "linear" },
            }}
            viewport={{ once: true }}
          />
        </li>
        <li className={styles.bottom}>
          <ul>
            <li className={styles.heading}>
              <h1>{heading}</h1>
            </li>
            <li className={styles.paragraph}>
              <p>{paragraph}</p>
            </li>
            <li className={styles.button}>
              <button>Learn More</button>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default TeamCard;
