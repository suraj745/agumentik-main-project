import { useState } from "react";
import styles from "../../styles/_inquiry/_supportcard2.module.scss";
import { motion } from "framer-motion";
const SupportCard2 = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <section className={styles.outer_container}>
      <motion.ul
        className={styles.inner_container}
        onClick={() => setRotate(!rotate)}
      >
        <li className={styles.icons}>
          <img
            src="mycollection/png/004-data-analysis.png"
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
        <li>
          {rotate && (
            <motion.ul className={styles.form}>
              <li className={styles.button}>
                <button className={styles.default}>New Registered User</button>
              </li>
              <li className={styles.button} onClick={() => setRotate(true)}>
                <button className={styles.default}>
                  Already Registered User
                </button>
              </li>
            </motion.ul>
          )}
        </li>
      </motion.ul>
    </section>
  );
};

export default SupportCard2;
