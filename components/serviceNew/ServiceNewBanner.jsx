import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ServiceNewBanner.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
const imageData = [
  {
    image: `/servicenewBanner/girl1.jpg`,
    name: "Website Development ",
    topic: "",
    link: "#website",
  },
  {
    image: `/servicenewBanner/men2.jpg`,
    name: "Application Development ",
    topic: "",
    link: "#application",
  },
  {
    image: `/servicenewBanner/girl2.jpg`,
    name: "Software Development ",
    topic: "",
    link: "#software",
  },

  {
    image: `/servicenewBanner/getty_481292845_77896.jpg`,
    name: "Digital Marketing ",
    topic: "",
    link: "#digital",
  },
];
const ServiceNewBanner = () => {
  const [hover, setHover] = useState(0);
  const tablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Container fluid className={styles.ServiceNewBanner_outer_container}>
      <Container className={styles.ServiceNewBanner_inner_container}>
        <Row className="align-items-center">
          <ul className={`${styles.intro} col-lg-4`}>
            <li data-aos="fade-up">
              <h1>Watch.</h1>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <h1>Learn.</h1>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <h1>Grow.</h1>
            </li>

            {/* <li
              data-aos-delay="600"
              data-aos="fade-right"
              className={styles.search}
            >
              <input type="text" placeholder="Find your passion" />
              <div className={styles.goButton}>
                <h1>GO</h1>
              </div>
            </li> */}
          </ul>

          <Col lg={8} className={styles.coursel_container}>
            <section className={styles.swiper_container}>
              {imageData.map((value, index) => {
                return (
                  <Link key={index} href={value.link} passHref>
                    <motion.section
                      className={`${styles.card}`}
                      onHoverStart={() => setHover(index)}
                      onHoverEnd={() => setHover(0)}
                      animate={{
                        width: hover === index ? "58%" : "21%",
                        transition: { duration: 0.4, ease: "easeIn" },
                      }}
                    >
                      <img src={`${value.image}`} alt="" />

                      {hover === index ? (
                        <motion.ul className={styles.content}>
                          <li>
                            <h1 className="px-5">
                              {value.name} <br />
                            </h1>
                          </li>
                          <li>
                            <h1>{/* 100 <br /> Topics */}</h1>
                          </li>
                        </motion.ul>
                      ) : (
                        <motion.ul className={styles.content2}>
                          <li>{!tablet && <h1>{value.name}</h1>}</li>
                        </motion.ul>
                      )}
                    </motion.section>
                  </Link>
                );
              })}
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ServiceNewBanner;
