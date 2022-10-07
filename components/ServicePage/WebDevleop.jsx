import React from "react";
import styles from "../../styles/ServicePage/webDevelop.module.scss";
const WebDevleop = () => {
  return (
    <section className="container">
      <section className="row content_pad align-items-center">
        <section data-aos="fade-right" className="col-lg-6 overflow-hidden">
          <img
            className={styles.web_image}
            src="/wedevelopbanner.jpg"
            alt=""
            width={"100%"}
          />
        </section>
        <section className="col-lg-6">
          <ul className={styles.right_content}>
            <li data-aos="fade-up" className={styles.title}>
              <h5>WEB DEVLOPMENT</h5>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              className={styles.heading}
            >
              <h1>How We Are Different in Website Development</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="400"
              className={styles.paragraph}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </li>
            <li className={styles.default_button}>
              <button className={styles.default}>Get Quote</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default WebDevleop;
