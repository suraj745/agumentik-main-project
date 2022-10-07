import React from "react";
import styles from "../../styles/Portfolio-Page/contactcard.module.scss";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const ContactCard = ({ icon, heading, content1, content2, location }) => {
  const [flip, setFlip] = useState(false);
  return (
    <motion.section whileHover={{ scale: 1.1 }}>
      <ReactCardFlip
        isFlipped={flip}
        flipDirection={"vertical"}
        className={styles.contact_card}
        whileHover={{ y: "-10px", transition: { duration: 0.4 } }}
      >
        <motion.ul
          onViewportLeave={() => setFlip(false)}
          className={styles.card_content}
          onClick={() => setFlip(!flip)}
        >
          <li>
            <li className={styles.icons}>{icon}</li>
          </li>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
        </motion.ul>

        <ul className={styles.card_content2} onClick={() => setFlip(!flip)}>
          <li className={styles.heading}>
            <p>
              {!location && <BsFillTelephoneFill />}
              {content1}
            </p>
            <p>
              {!location ? <MdEmail /> : location}

              {content2}
            </p>
          </li>
        </ul>
      </ReactCardFlip>
    </motion.section>
  );
};

export default ContactCard;
