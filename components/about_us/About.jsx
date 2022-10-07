import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_about/_about.module.scss";
import Number from "./Number";
import Image from "next/image";
import Link from "next/link";
import Brochere from "./Brochere";
const About = () => {
  const [form, setForm] = useState(false);
  return (
    <section className={styles.about_container}>
      <section className="container">
        <section className="about_content row align-items-center justify-content-center flex-lg-row flex-column   ">
          <section
            className={
              "col-lg-6 d-flex align-items-center justify-content-between overflow-hidden"
            }
          >
            <img
              data-aos="fade-right"
              className={styles.image}
              src="/aboutus.webp"
              alt=""
            />
          </section>
          <section className="col-lg-5">
            <ul className={styles.content_container}>
              <li data-aos="fade-up" className={styles.title}>
                <h5>About Us</h5>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                className={styles.heading}
              >
                <h1>Who We Are</h1>
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
                  Agumentik have a big vision, taking very small but smart steps
                  to get toward success. We are humble, visionary and gigantic
                  as well in terms of aspiration. In the Information and
                  Technology Industry, “It’s not about a splendid innovation,
                  it’s about a bunch of little innovations every day, every
                  month and so on for carrying out something a slight better and
                  efficient.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                <Number num1={"1150"} num2={"450"} />
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="800"
                className={styles.buttons}
              >
                <button
                  className={styles.default}
                  onClick={() => setForm(true)}
                >
                  Download Brochere
                </button>

                <Link href={"/about-us"} passHref>
                  <button className={styles.default}>Know More</button>
                </Link>
              </li>
            </ul>
          </section>
        </section>
        {form && <Brochere setForm={() => setForm(false)} />}
      </section>
    </section>
  );
};

export default About;
