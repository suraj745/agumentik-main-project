import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./ScrollSpy.module.scss";
import Scrollspy from "react-scrollspy";
import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { MdRowing } from "react-icons/md";

const ScrollSpy = ({ faq }) => {
  const [view, setView] = useState(1);

  return (
    <Container className={`${styles.faq_container} `}>
      <Row>
        <Row className={styles.heading}>
          <h1>Frequently Asked Questions</h1>
        </Row>
        <Row
          className={`${styles.faq_main_container} pt-5 flex-column flex-md-row`}
        >
          <ul className={`col-md-4 ${styles.left}`}>
            {faq.map((value, index) => {
              return (
                <motion.li className={`${view === value.id && styles.active}`}>
                  {value.question}
                </motion.li>
              );
            })}
          </ul>
          <motion.ul className={`col-md-8 ${styles.right}`}>
            {faq.map((value, index) => {
              return (
                <motion.li
                  onViewportEnter={(e) => {
                    console.log(e);
                    setView(value.id);
                  }}
                  key={index}
                >
                  {value.answer}
                </motion.li>
              );
            })}
          </motion.ul>
        </Row>
      </Row>
    </Container>
  );
};

export default ScrollSpy;
