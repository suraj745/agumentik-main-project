import React, { Component } from "react";
import styles from "../../styles/loading/Loading.module.scss";
class Loader extends Component {
  render() {
    return (
      <section className={`${styles.container}`}>
        <div className={styles.loader}>Agumentik</div>
      </section>
    );
  }
}

export default Loader;
