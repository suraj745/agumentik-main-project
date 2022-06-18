import React, { Component } from "react";
import styles from "../../styles/AboutUs/aggroup.module.scss";
export default class AgGroup extends Component {
  render() {
    return (
      <section className="container">
        <section className="content_pad row align-items-center">
          <section className="col-lg-6">
            <img
              src="https://agumentik-software.vercel.app/images/group.jpg"
              alt=""
              width={"100%"}
            />
          </section>
          <section className="col-lg-6">
            <ul className={styles.right_content}>
              <li className={styles.title}>
                <h5>ABOUT AGUMENTIK GROUP</h5>
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
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
