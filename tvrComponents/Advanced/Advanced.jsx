import React from "react";
import styles from "../../styles/TVR styles/Advnaced/Advanced.module.scss";
const Advanced = () => {
  return (
    <section className={styles.advanced_container}>
      <section className="container">
        <section className="row">
          <section className="col-md-6">
            <ul className={styles.advanced_content}>
              <li className={styles.title}>
                <h5>the most advanced</h5>
              </li>
              <li className={styles.heading}>
                <h1>
                  Location Based <span>VR</span>
                  <br />
                  Entertainment Platform
                </h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  A true VR system is large scale, motion capture, multiplayer
                  4D system combined with enabled physical objects, force and
                  haptic feedback solution
                </p>
              </li>
              <li className={styles.contact_button}>
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
