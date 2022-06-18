import React from "react";
import styles from "../../styles/_service/_servicecard.module.scss";
const ServiceCard = ({
  icon,
  heading,
  paragraph,
  color,
  className,
  border,
}) => {
  return (
    <section className={className} style={{ width: "100%" }}>
      <ul className={styles.card_content} style={{ backgroundColor: color }}>
        <li className={styles.icon} style={{ borderColor: border }}>
          <img src={icon} alt="" />
        </li>
        <li className={styles.heading}>
          <h1>{heading}</h1>
        </li>
        <li className={styles.paragraph}>
          <p>{paragraph}</p>
        </li>
      </ul>
    </section>
  );
};

export default ServiceCard;
