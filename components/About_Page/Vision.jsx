import React, { Component } from "react";
import styles from "../../styles/AboutUs/vision.module.scss";
export default class Vision extends Component {
  render() {
    return (
      <section className="container">
        <section className="row align-items-center">
          <section className="col-lg-6">
            <img
              src="https://agumentik-software.vercel.app/images/mission.jpg"
              alt=""
              width={"100%"}
            />
          </section>
          <section className="col-lg-6">
            <ul className={styles.right_content}>
              <li className={styles.title}>
                <h5>OUR VISION</h5>
              </li>
              <li className={styles.heading}>
                <h1>We are Dynamic Team of SEO Agency</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
              <li className>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna aliqua.
                </strong>
              </li>
              <li className>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </li>
              <li className="number_main">
                <section className="number_sub">
                  <h1>
                    <span className="number"> 1,165</span>
                    <span className="increment">+</span>
                  </h1>
                  <p>Project Completed</p>
                </section>
                <section className="number_sub">
                  <h1>
                    <span className="number"> 2,665</span>
                    <span className="increment">+</span>
                  </h1>
                  <p>Satisfied Client</p>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
