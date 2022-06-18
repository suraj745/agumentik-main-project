import React, { Component } from "react";
import styles from "../../styles/_service/_service.module.scss";
import ServiceCard from "./ServiceCard";
import { Container, Row, Col } from "react-bootstrap";
export default class Service extends Component {
  // background: #faddd4;
  // background: #cafbf1;
  //   background: #ddd5fb;
  //   background: #fcdeee;
  //  background: #c5ebf9;
  cardDetail = [
    {
      icon: "/mycollection/png/002-seo.png",
      heading: `Mobile App Development`,
      paragraph: `Android was intended to be very customizable. And we welcome innovations.`,
      color: `#f1eff8`,
      border: "#7a65c8",
      class: styles.card1,
    },
    {
      icon: "/mycollection/png/003-analytics.png",
      heading: `Website Development`,
      paragraph: `Programs must be written for people to read and for machines to execute.`,
      color: ` #fbe6d4`,
      class: styles.card2,
      border: "#f2801e",
    },
    {
      icon: "/mycollection/png/001-laptop.png",
      heading: `Software Development`,
      paragraph: `A successful website contains sparkling elements, which attracts others.`,
      color: "#f0fffc",
      class: styles.card3,
      border: "#25b597",
    },
    {
      icon: `/mycollection/png/004-data-analysis.png`,
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
                  <li className={styles.title}>
                    <h5>Quick Services</h5>
                  </li>
                  <li className={styles.heading}>
                    <h1>Services You Care About And We Excel At</h1>
                  </li>
                  <li className={styles.design}>
                    <span></span>
                    <span></span>
                  </li>
                  <li className={styles.paragraph}>
                    <p>
                      We strive to provide you with the best solutions to the
                      needs of your business system. As a company, we value your
                      obstacles and objectives and develop solutions that best
                      satisfy your demands. We offer your business strong and
                      adequate solutions with lasting impact.....
                    </p>
                  </li>
                  <li className={styles.buttons}>
                    <button className={styles.default}>Call Us Now</button>
                  </li>
                </ul>
              </section>

              <section className="col">
                <section className={styles.card_grid}>
                  {this.cardDetail.map((value) => {
                    return (
                      <ServiceCard
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
