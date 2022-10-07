import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_service_card_style/_service_card.module.scss";
import GridCard from "./GridCard";
import { motion } from "framer-motion";

import Link from "next/link";
const contain = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
  },
};
const serviceDetail = [
  {
    logo: "/new-icons/seo.png",
    heading: `Search Engine Optimization`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#F24976",
  },

  {
    logo: "/new-icons/content-strategy.png",
    heading: `Social Media Strategy`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#3B579F",
  },

  {
    logo: "/new-icons/data.png",
    heading: `Real Time and Data`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#2488ff",
  },

  {
    logo: "/new-icons/caption.png",
    heading: `Online Media Management`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#46b29d",
  },

  {
    logo: "/new-icons/analysis.png",
    heading: `Reporting & Analysis`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#ff4756",
  },

  {
    logo: "/new-icons/data-recovery.png",
    heading: `Penalty Recovery`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#90bae1",
  },

  {
    logo: "/new-icons/seo.png",
    heading: `Search Engine Optimization`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#F24976",
  },

  {
    logo: "/new-icons/content-strategy.png",
    heading: `Social Media Strategy`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.`,
    color: "#3B579F",
  },
];
const ServicesCard = () => {
  return (
    <section className={styles.container}>
      <section className="container py-5">
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
              <motion.section
                className={styles.grid_card}
                // variants={contain}
                // initial={"hidden"}
                // animate={"show"}
              >
                {serviceDetail.map(
                  ({ heading, paragraph, logo, color }, index) => {
                    return (
                      <GridCard
                        key={index}
                        id={index}
                        heading={heading}
                        paragraph={paragraph}
                        logo={logo}
                        background={color}
                      />
                    );
                  }
                )}
              </motion.section>
            </section>

            <section className={`${styles.button} mt-5`}>
              <Link href={"/services"}>
                <button className={styles.default}>More Services</button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServicesCard;
