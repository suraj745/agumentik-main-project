import React from "react";
import styles from "../../styles/TVR styles/Design/design_card.module.scss";
const DesignCard = ({ icon, number, title }) => {
  return (
    <ul className={styles.design_Card}>
      <li className={styles.design_icon}>{icon}</li>
      <li className={styles.number}>
        <h1>{number}</h1>
      </li>
      <li className={styles.heading}>
        <p>{title} </p>
      </li>
    </ul>
  );
};

export default DesignCard;
