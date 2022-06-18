import React, { Component } from "react";
import styles from "../../styles/loading/Loading.module.scss";
class Loader extends Component {
  render() {
    return (
      <div className={styles.preloader}>
        <div className={styles.loader}>
          <div className={styles.shadow}></div>
          <div className={styles.box}></div>
        </div>
      </div>
    );
  }
}

export default Loader;
