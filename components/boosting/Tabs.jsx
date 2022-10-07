import React, { Component } from "react";
import styles from "../../styles/_boosting/_tabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ImOpt } from "react-icons/im";
import { motion } from "framer-motion";
const Tabs = ({
  icon,
  heading,
  background,
  state,
  classname,
  setSelect,
  layoutId,
}) => {
  return (
    <motion.section
      onClick={state}
      onClickCapture={setSelect}
      className={`${styles.icon_container} ${classname}`}
      style={{ background: background }}
      transition={{ duration: 0.2 }}
    >
      <img src={icon} alt="image" width={"40rem"} />
      <motion.h1>{heading}</motion.h1>
    </motion.section>
  );
};

export default Tabs;
