import React from "react";
import styles from "./Consultation.module.scss";
import { Container, Row, Col } from "reactstrap";
import Form from "../../augmen2/Form/Form";
import { useState } from "react";
import { set } from "react-hook-form";
const Consultation = () => {
  const [form, setForm] = useState(false);
  return (
    <Container
      fluid
      className={`${styles.consultation_container} d-flex align-items-center mt-5`}
    >
      {form && <Form closeForm={() => setForm(false)} />}
      <Container>
        <Row className="align-items-center">
          <ul className={`col-6 ${styles.consultation_left}`}>
            <li>
              <h3>WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7</h3>
            </li>
            <li>
              <h1>NEED A CONSULTATION?</h1>
            </li>
          </ul>
          <ul className={`col-6 ${styles.consultation_right} text-end`}>
            <li className={styles.default_button}>
              <button className={styles.default} onClick={() => setForm(true)}>
                GET A QUOTE
              </button>
            </li>
          </ul>
        </Row>
      </Container>
    </Container>
  );
};

export default Consultation;
