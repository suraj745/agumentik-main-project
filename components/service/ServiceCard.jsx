import React from "react";
import styles from "../../styles/_service/_servicecard.module.scss";
import { motion } from "framer-motion";
import Form from "../../augmen2/Form/Form";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
const ServiceCard = ({
  icon,
  heading,
  paragraph,
  color,
  className,
  border,
  id,
}) => {
  const [form, setForm] = useState(false);
  return (
    <>
      <section
        className={className}
        style={{ width: "100%" }}
        onClick={() => setForm(true)}
        data-aos-delay={`${id * 200}`}
        data-aos="fade-up"
      >
        <motion.ul
          className={styles.card_content}
          style={{ backgroundColor: color }}
          whileHover={{ background: "white", outline: "0.1rem solid red" }}
        >
          <li className={styles.icon} style={{ borderColor: border }}>
            <img src={icon} alt="" />
          </li>
          <li className={styles.heading}>
            <h1>{heading}</h1>
          </li>
          <li className={styles.paragraph}>
            <p>{paragraph}</p>
          </li>
        </motion.ul>
      </section>
      <AnimatePresence>
        {form && <Form closeForm={() => setForm(!form)} />}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
