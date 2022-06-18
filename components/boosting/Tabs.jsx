import React, { Component } from "react";
import styles from "../../styles/_boosting/_tabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ImOpt } from "react-icons/im";
import { motion } from "framer-motion";
export default class Tabs extends Component {
  render() {
    const { icon, heading, background, state } = this.props;
    return (
      <motion.section
        onClick={state}
        className={styles.icon_container}
        style={{ background: background }}
        whileHover={{ background: "red", color: "white" }}
        transition={{ duration: 0.2 }}
      >
        <img src={icon} alt="image" width={"40rem"} />
        <motion.h1>{heading}</motion.h1>
      </motion.section>
    );
  }
}
