import React from "react";
import styles from "../../styles/Portfolio-Page/contactcard.module.scss";
import { motion } from "framer-motion";
const ContactCard = ({ icon, heading, content1, content2 }) => {
  return (
    <motion.ul
      className={styles.contact_card}
      whileHover={{ y: "-10px", transition: { duration: 0.4 } }}
    >
      <li className={styles.icons}>{icon}</li>
      <li>
        <ul className={styles.card_content}>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.para}>
            <p>{content1}</p>
            <p>{content2}</p>
          </li>
        </ul>
      </li>
    </motion.ul>
  );
};

export default ContactCard;
