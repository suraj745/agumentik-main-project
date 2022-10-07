import React, { Component } from "react";
import styles from "../../styles/_service/_service.module.scss";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
export default class Service extends Component {
  // background: #faddd4;
  // background: #cafbf1;
  //   background: #ddd5fb;
  //   background: #fcdeee;
  //  background: #c5ebf9;
  cardDetail = [
    {
      icon: "/Services/mobile1.png",
      heading: `Mobile App Development`,
      paragraph: `Android was intended to be very customizable. And we welcome innovations.`,
      color: `#f1eff8`,
      border: "#7a65c8",
      class: styles.card1,
    },
    {
      icon: "/Services/website.png",
      heading: `Website Development`,
      paragraph: `Programs must be written for people to read and for machines to execute.`,
      color: ` #fbe6d4`,
      class: styles.card2,
      border: "#f2801e",
    },
    {
      icon: "/Services/software1.png",
      heading: `Software Development`,
      paragraph: `A successful website contains sparkling elements, which attracts others.`,
      color: "#f0fffc",
      class: styles.card3,
      border: "#25b597",
    },
    {
      icon: `/Services/digital.png`,
      heading: `Digital Marketing`,
      paragraph: `Three responses to a piece of design – yes, no, and WOW! Wow is what we aim for.`,
      color: "#f8e1eb",
      class: styles.card4,
      border: "#f0116f",
    },
  ];
  render() {
    return (
      <section>
        <section className={styles.service_container}>
          <section className="container">
            <section className="service_content row flex-lg-row flex-column align-items-center">
              <section className="col">
                <ul className={styles.left_section}>
                  <li data-aos="fade-up" className={styles.title}>
                    <h5>Quick Services</h5>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className={styles.heading}
                  >
                    <h1>Services You Care About And We Excel At</h1>
                  </li>
                  <li
                    className={styles.design}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <span></span>
                    <span></span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className={styles.paragraph}
                  >
                    <p>
                      We strive to provide you with the best solutions to the
                      needs of your business system. As a company, we value your
                      obstacles and objectives and develop solutions that best
                      satisfy your demands. We offer your business strong and
                      adequate solutions with lasting impact.....
                    </p>
                  </li>
                  <li
                    className={`${styles.buttons} d-flex flex-column flex-md-row gap-2`}
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <Link href={"/contact"}>
                      <button className={styles.default}>Call Us Now</button>
                    </Link>

                    <Link href={"#"}>
                      <button className={styles.default}>
                        Download Broucher
                      </button>
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="col mt-5 mt-lg-0">
                <section className={styles.card_grid}>
                  {this.cardDetail.map((value, index) => {
                    return (
                      <ServiceCard
                        id={index}
                        key={index}
                        icon={value.icon}
                        heading={value.heading}
                        paragraph={value.paragraph}
                        color={value.color}
                        border={value.border}
                        className={value.class}
                      />
                    );
                  })}
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
