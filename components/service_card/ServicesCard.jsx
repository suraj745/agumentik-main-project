import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_service_card_style/_service_card.module.scss";
import GridCard from "./GridCard";

const serviceDetail = [
  {
    logo: "/png2/004-business-plan.png",
    heading: `Search Engine Optimization`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#faddd4",
  },

  {
    logo: "/png2/002-searching.png",
    heading: `Social Media Strategy`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#cafbf1",
  },

  {
    logo: "/png2/001-app-development.png",
    heading: `Real Time and Data`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#ddd5fb",
  },

  {
    logo: "/png2/004-business-plan.png",
    heading: `Online Media Management`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#fcdeee",
  },

  {
    logo: "/mycollection/png/004-data-analysis.png",
    heading: `Reporting & Analysis`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#c5ebf9",
  },

  {
    logo: "/png2/005-data-recovery.png",
    heading: `Penalty Recovery`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#f8fbd5",
  },
];
const ServicesCard = () => {
  return (
    <section className={styles.container}>
      <section className="container">
        <section className={styles.main_container}>
          <section className="row d-flex flex-column">
            <section className="service_left_content col">
              <ul className={styles.content}>
                <li className={styles.title}>
                  <h5>SERVICES</h5>
                </li>
                <li className={styles.heading}>
                  <h1>How We Can Help?</h1>
                </li>
                <li className={styles.design}>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </section>
            <section className="col">
              <section className={styles.grid_card}>
                {serviceDetail.map(({ heading, paragraph, logo, color }) => {
                  return (
                    <GridCard
                      heading={heading}
                      paragraph={paragraph}
                      logo={logo}
                      background={color}
                    />
                  );
                })}
              </section>
            </section>

            <section className={styles.button}>
              <button className={styles.default}>More Services</button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServicesCard;
