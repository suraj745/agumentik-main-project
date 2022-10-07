import { useState } from "react";
import styles from "../../styles/_inquiry/_supportcard2.module.scss";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";

const SupportCard2 = () => {
  const [flip, setFlip] = useState(false);
  return (
    <section className={styles.outer_container}>
      <ReactCardFlip isFlipped={flip} flipDirection={"horizontal"}>
        <motion.ul
          className={styles.inner_container}
          onClick={() => setFlip(!flip)}
        >
          <li className={styles.icons}>
            <img
              src="/new-icons/customer-service.png"
              alt=""
              width={"40px"}
              height={"40px"}
            />
          </li>
          <li className={styles.heading}>
            <h1>Support</h1>
          </li>
          <li className={styles.paragraph}>
            <p>
              Raise a query to our support team using the Grievence board or
              Conatct Page. We will get back to you!
            </p>
          </li>
        </motion.ul>

        <motion.ul className={`${styles.form}`} onClick={() => setFlip(!flip)}>
          <li className={styles.button}>
            <button className={styles.default}>New User</button>
          </li>
          <li className={styles.button}>
            <button className={styles.default}> Existing User</button>
          </li>
        </motion.ul>
      </ReactCardFlip>
    </section>
  );
};

export default SupportCard2;
