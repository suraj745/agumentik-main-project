import React, { useState } from "react";
import styles from "../../styles/_about/_number.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Number = ({ num1, num2 }) => {
  const [view, setView] = useState(false);

  return (
    <motion.section
      className={styles.numbers}
      whileInView={() => {
        setView(true);
      }}
      onViewportLeave={() => {
        setView(false);
      }}
    >
      <section>
        <h1>
          <CountUp start={view && 0} end={num1}></CountUp>
          <span>+</span>
        </h1>
        <p>Project Completed</p>
      </section>
      <section>
        <h1>
          <CountUp start={view && 0} end={num2}></CountUp>

          <span>+</span>
        </h1>
        <p>Satisfied Clients</p>
      </section>
    </motion.section>
  );
};

export default Number;
