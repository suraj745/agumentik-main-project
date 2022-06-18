import React from "react";
import styles from "../styles/TVR styles/Banner/_banner.module.scss";
const Banner = () => {
  return (
    <section className={styles.picture_container}>
      <section className="container">
        <section className="row align-items-center">
          <ul className={styles.banner_content}>
            <li className={styles.heading}>
              <h1>
                We are <span className={styles.bold}>AG</span>
                <br />
                virtual reality system
              </h1>
            </li>
            <li className={styles.paragraph}>
              <p>
                We belive true VR can only be experienced through
                large-scale,full-body immersion
              </p>
            </li>
            <li className={styles.contact_button}>
              <button>Contact Us</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Banner;
