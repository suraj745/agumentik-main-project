import React, { Component } from "react";
import styles from "../../styles/_about/_number.module.scss";
export default class Number extends Component {
  render() {
    const { num1, num2 } = this.props;
    return (
      <>
        <section className={styles.numbers}>
          <section>
            <h1>
              <span>{num1}</span>
              <span>+</span>
            </h1>
            <p>Project Completed</p>
          </section>
          <section>
            <h1>
              <span>{num2}</span>
              <span>+</span>
            </h1>
            <p>Satisfied Clients</p>
          </section>
        </section>
      </>
    );
  }
}
