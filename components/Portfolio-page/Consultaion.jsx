import React from "react";
import styles from "../../styles/Portfolio-Page/consult.module.scss";
const Consultaion = () => {
  return (
    <section className="container py-5">
      <section className="row justify-content-between py-5">
        <section className="col-lg-5">
          <img
            className={styles.image}
            src="/consult.jpg"
            alt=""
            width={"100%"}
            style={{ objectFit: "contain", height: "40rem" }}
          />
        </section>
        <section className="col-lg-6 d-flex align-items-center">
          <ul className={styles.consult_content}>
            <li className={styles.title}>
              <h5>OUR CONSULTATION SERVICE</h5>
            </li>
            <li className={styles.heading}>
              <h1>Let's Dive Into Our Consultants</h1>
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
            <li className={`${styles.button} mt-5`}>
              <button className={styles.default}>Book A Consultation</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Consultaion;
