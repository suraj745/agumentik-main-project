import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../EngageProspect/EngageProspect.module.scss";
const Control = () => {
  return (
    <Container className={`${styles.prospect_container} overflow-hidden`}>
      <Row className={"align-items-center justify-content-between py-5 "}>
        <Col data-aos="fade-up" lg={5} className={styles.left}>
          <img src="/New folder/code.png" alt="" />
        </Col>
        <ul className={`${styles.right} col-lg-6 `}>
          <li data-aos="fade-up">
            <h1>
              Control Updates <br /> Within Your Codebase.
            </h1>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <p>
              As Practitoners Ourselves We understand The Needs And Motivations
              Of Developers. Ternary Is Designed To Bring Everyone.
            </p>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <button>Learn More</button>
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default Control;
