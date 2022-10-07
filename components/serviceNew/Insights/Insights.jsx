import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Insights.module.scss";
import { TiTick } from "react-icons/ti";
const Insights = () => {
  return (
    <Container className={`${styles.prospect_container} overflow-hidden`}>
      <Row className={"align-items-center justify-content-between py-5 "}>
        <Col data-aos="fade-up" lg={5} className={styles.left}>
          <img src="/New folder/Graph.png" alt="" />
        </Col>
        <ul className={`${styles.right} col-lg-6 `}>
          <li data-aos="fade-up">
            <h1>Insights To Drive Revenue Growth</h1>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <p>
              Create An Environment That Attractc Because it's Flexible,
              Collborative And Countinuosly Serves Human Needs
            </p>

            <ul className={styles.list}>
              <li>
                <p>
                  <TiTick className={styles.tick} />
                  Easily Searchabel Skills And Ownership Tags
                </p>
              </li>
              <li>
                <p>
                  <TiTick className={styles.tick} />
                  Track Employee Achievements
                </p>
              </li>
              <li>
                <p>
                  <TiTick className={styles.tick} />
                  Global Employee Map View
                </p>
              </li>
            </ul>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <button>Learn More</button>
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default Insights;
