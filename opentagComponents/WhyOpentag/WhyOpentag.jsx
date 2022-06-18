import React from "react";
import styles from "../../styles/OpenTagStyle/whyopentag/wheyopentag.module.scss";
import { motion } from "framer-motion";

const WhyOpentag = () => {
  return (
    <section className="open_container ">
      <section className="opentag_container container">
        <section className="opentag_content row  flex-lg-row flex-column-reverse">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.4, ease: "linear", delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="opentag_left 
          d-flex justify-content-center align-items-center
          col-lg-6"
          >
            <img src="/opentag-image/dot.png" className={styles.dot1} alt="" />
            <img src="/opentag-image/dot.png" alt="" className={styles.dot2} />
            <img src="/opentag-image/Layer 3.png" alt="" width={"100%"} />
          </motion.section>
          <motion.section className="opentag_right col-lg-6">
            <motion.ul
              className={styles.right_content}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              viewport={{ once: true }}
            >
              <li className={styles.heading}>
                <h1>Why Agumentik</h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Creating the level of product with level of scale the
                  <br />
                  business require, provides a exceptional challenge,
                  <br /> ad so we have an exceptioal team that have <br />
                  common dream to relize. The expreience in open tag <br /> is
                  unique
                </p>
              </li>
              <li className={styles.button}>
                <button>Join the team</button>
              </li>
            </motion.ul>
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default WhyOpentag;
