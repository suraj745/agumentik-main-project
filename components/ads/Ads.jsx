import React, { Component } from "react";
import styles from "../../styles/_ads/ads.module.scss";
export default class Ads extends Component {
  render() {
    return (
      <section className={styles.container}>
        <section className="container">
          <section className="row justify-content-between  flex-md-row flex-column">
            <section className="col-md-6">
              <ul className={styles.left}>
                <li>
                  <h1 className={styles.heading}>Sign Up For Newsletter</h1>
                </li>
                <li>
                  <p>And Receive 40% Discount On First Project</p>
                </li>
              </ul>
            </section>
            <section className="col-md-6 d-flex justify-content-center align-items-center">
              <section className={styles.input}>
                <input type="text" placeholder="Enter Your Email" />
                <button className={styles.default}>Subscribe Now</button>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
