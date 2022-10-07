import React, { Component } from "react";
import styles from "../../styles/_service_card_style/grid_card.module.scss";
import { motion } from "framer-motion";
export default class GridCard extends Component {
  render() {
    const { logo, heading, paragraph, background, id } = this.props;
    return (
      <motion.ul
        data-aos="zoom-in"
        data-aos-delay={`${id * 100}`}
        className={styles.card_container}
      >
        <li
          className={styles.icons}
          //  style={{ background: background }}
        >
          <span
          //  style={{ border: `0.3rem solid ${background}` }}
          >
            <img src={logo} alt="icon" />
          </span>
        </li>
        <li className={styles.content}>
          <ul>
            <li className={styles.heading}>
              <h5>{heading}</h5>
            </li>
            <li className={styles.paragraph}>
              <p>{paragraph}</p>
            </li>
          </ul>
        </li>
      </motion.ul>
    );
  }
}
