import React, { Component } from "react";
import styles from "../../styles/Products/ourproduct.module.scss";
export default class OurProducts extends Component {
  render() {
    return (
      <section className="container">
        <section className="row align-items-center">
          <section className="col-lg-6">
            <img src="/images/rocket.png" alt="" width={"100%"} />
          </section>
          <section className="col-lg-6">
            <ul className={styles.right_content}>
              <li className={styles.title}>
                <h5>OUR PRODUCTS</h5>
              </li>
              <li className={styles.heading}>
                <h1>Let's Dive Into Our Products</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </li>
              <li className={styles.defaul_button}>
                <button className={styles.default}>Know More</button>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
