import React from "react";
import styles from "../styles/TVR styles/Banner/_banner.module.scss";
const Banner = () => {
  return (
    <section className={styles.picture_container}>
      <section className="container">
        <section className="row align-items-center">
          <ul className={styles.banner_content}>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              className={styles.heading}
            >
              <h1>
                We are <span className={styles.bold}>AG</span>
                <br />
                virtual reality system
              </h1>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className={styles.paragraph}
            >
              <p>
                We belive true VR can only be experienced through
                large-scale,full-body immersion
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className={styles.contact_button}
            >
              <button>Contact Us</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Banner;
