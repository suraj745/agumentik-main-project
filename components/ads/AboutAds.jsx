import React from "react";
import styles from "../../styles/_ads/aboutads.module.scss";
const AboutAds = ({ title, heading, display }) => {
  return (
    <section className={styles.about_ads_container}>
      <ul className={styles.about_ads_content}>
        <li className={styles.title}>
          <h5>{title}</h5>
        </li>
        <li className={styles.heading}>
          <h1>{heading}</h1>
        </li>
        <li className={styles.input_container} style={{ display: display }}>
          <section className={styles.input}>
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button>Subscribe</button>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default AboutAds;
