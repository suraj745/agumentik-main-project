import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_inquiry/_inquiry.module.scss";
import SupportCard from "../../components/inquiry/SupportCard";
import SupportCard2 from "./SupportCard2";
export default class Inquiry extends Component {
  render() {
    return (
      <section>
        <section className="container">
          <section className="row content_pad justify-content-center align-items-center flex-column">
            <section className="col d-flex justify-content-center align-items-center">
              <ul className={styles.top}>
                <li className={styles.title}>
                  <h5>SUPPORT</h5>
                </li>
                <li className={styles.heading}>
                  <h1>Inquiry and Support</h1>
                </li>
                <li className={styles.design}>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </section>
            <section className="col d-flex justify-content-center align-items-center">
              <section className={styles.cards}>
                <SupportCard />
                <SupportCard2 />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
