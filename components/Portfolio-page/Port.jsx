import React from "react";
import styles from "../../styles/Portfolio-Page/_port.module.scss";
const Port = () => {
  return (
    <section className="container">
      <section className="row content_pad ">
        <section className="col-lg-6 d-flex align-items-center">
          <img src="/images/Port-page/port.svg" alt="image" width={"100%"} />
        </section>
        <section className="col-lg-6 d-flex align-items-center">
          <ul className={styles.port_content}>
            <li className={styles.title}>
              <h5>PORTFOLIO</h5>
            </li>
            <li className={styles.heading}>
              <h1>What Are Things Covered</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li className={styles.paragraph}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </li>
            <li className={styles.button}>
              <button className={styles.default}>Know More</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Port;
