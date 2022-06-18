import React, { Component } from "react";
import styles from "../../styles/_service_card_style/grid_card.module.scss";
import { motion } from "framer-motion";
export default class GridCard extends Component {
  render() {
    const { logo, heading, paragraph, background } = this.props;
    return (
      <ul className={styles.card_container}>
        <li className={styles.icons} style={{ background: background }}>
          <img src={logo} alt="icon" />
        </li>
        <li className={styles.heading}>
          <h5>{heading}</h5>
        </li>
        <li className={styles.paragraph}>
          <p>{paragraph}</p>
        </li>
      </ul>
    );
  }
}
