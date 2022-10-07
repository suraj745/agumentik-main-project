import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./EngageProspect.module.scss";
const EngageProspect = () => {
  return (
    <Container className={`${styles.prospect_container} overflow-hidden`}>
      <Row className={"align-items-center justify-content-between py-5"}>
        <Col data-aos="fade-up" lg={5} className={styles.left}>
          <img src="/New folder/Girl.png" />
        </Col>
        <ul className={`${styles.right} col-lg-6`}>
          <li data-aos="fade-up">
            <h1>Engage Your Prospects Wherever They Are Are.</h1>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <p>
              Saasant Replaces ALl Those Apps And Complicated Invoicing Tools
              That Made It Challenging To Keep Track Of All Your Customers.
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

export default EngageProspect;
