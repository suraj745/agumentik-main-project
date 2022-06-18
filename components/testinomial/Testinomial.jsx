import React from "react";
import styles from "../../styles/testinomial/_testinomial.module.scss";
import SwiperTestinomial from "./SwiperTestinomial";
import Swiper from "./SwiperTestinomial";
const Testinomial = () => {
  return (
    <section className="container">
      <section className="row flex-lg-row flex-column">
        <section className="col-lg-4 d-flex justify-content-center align-items-center">
          <ul className={styles.left_content}>
            <li className={styles.title}>
              <h5>TESTIMONIAL</h5>
            </li>
            <li className={styles.heading}>
              <h1>What Our Client Say</h1>
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
                maecenas accumsan lacus.Lorem is simply dummy text of the
                printing and typesetting industry.
              </p>
            </li>
          </ul>
        </section>
        <section className="col-lg-8 d-flex justify-content-center align-items-center">
          <SwiperTestinomial />
        </section>
      </section>
    </section>
  );
};

export default Testinomial;
