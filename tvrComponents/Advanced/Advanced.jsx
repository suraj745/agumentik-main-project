import React from "react";
import styles from "../../styles/TVR styles/Advnaced/Advanced.module.scss";
const Advanced = () => {
  return (
    <section className={styles.advanced_container}>
      <section className="container">
        <section className="row">
          <section className="col-md-6">
            <ul className={styles.advanced_content}>
              <li data-aos="fade-up" className={styles.title}>
                <h5>the most advanced</h5>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                className={styles.heading}
              >
                <h1>
                  Location Based <span>VR</span>
                  <br />
                  Entertainment Platform
                </h1>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="400"
                className={styles.paragraph}
              >
                <p>
                  A true VR system is large scale, motion capture, multiplayer
                  4D system combined with enabled physical objects, force and
                  haptic feedback solution
                </p>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="600"
                className={styles.contact_button}
              >
                <button>Learn More</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Advanced;
