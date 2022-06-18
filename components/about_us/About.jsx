import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_about/_about.module.scss";
import Number from "./Number";
import Image from "next/image";
const About = () => {
  return (
    <section classname={styles.about_container}>
      <section className="container">
        <section className="about_content row align-items-center justify-content-center flex-lg-row flex-column   ">
          <section
            className={
              "col-lg-6 d-flex align-items-center justify-content-center"
            }
          >
            <img
              className={styles.image}
              src="/images/about-image.png"
              alt=""
            />
          </section>
          <section className="col-lg-6">
            <ul className={styles.content_container}>
              <li className={styles.title}>
                <h5>About Us</h5>
              </li>
              <li className={styles.heading}>
                <h1>Who We Are</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Agumentik have a big vision, taking very small but smart steps
                  to get toward success. We are humble, visionary and gigantic
                  as well in terms of aspiration. In the Information and
                  Technology Industry, “It’s not about a splendid innovation,
                  it’s about a bunch of little innovations every day, every
                  month and so on for carrying out something a slight better and
                  efficient.
                </p>
              </li>
              <li>
                <Number num1={"1150"} num2={"450"} />
              </li>
              <li className={styles.buttons}>
                <button className={styles.default}>Download Brochere</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
