import React from "react";
import styles from "../../styles/ReadiStyles/ads/ads.module.scss";
const Ads = () => {
  return (
    <section className="container" id="Ads">
      <section className="row content_pad">
        <ul className={styles.ads_container}>
          <li className={styles.heading}>
            <h1>Alorica: 30 days, $500K In annual savings</h1>
          </li>
          <li className={styles.paragraph}>
            <p>
              Find out how identity automation with the READI platform made the
              impossible, possible
            </p>
          </li>
          <li className={styles.button}>
            <button>
              <span>Readi for success ?</span>
              <i></i>
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Ads;
