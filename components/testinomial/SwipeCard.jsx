import React, { Component } from "react";
import styles from "../../styles/testinomial/swipecard.module.scss";
export default class extends Component {
  render() {
    const { img, name, post } = this.props;
    return (
      <section className={styles.card_container}>
        <section className={styles.image}>
          <section>
            <img src={img} alt="" />
          </section>
        </section>
        <section className={styles.card_content}>
          <h1>{name}</h1>
          <p>{post}</p>
          <section className={styles.comma}>
            <img src="/icons8-get-quote-32.png" alt="" />
          </section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </section>
      </section>
    );
  }
}
