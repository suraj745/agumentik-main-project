import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/_inquiry/supportcard.module.scss";
import { useState } from "react";
const InquriyCard = () => {
  const [cssclass, setCssClass] = useState(false);

  return (
    <div className={styles.outerLayer}>
      <div
        className={styles.cardContainer}
        onClick={() => setCssClass(!cssclass)}
      >
        <div className={cssclass ? "animate__animated animate__bounce " : " "}>
          <ul className={styles.cardContent1}>
            <li className={styles.icon}>
              <img src="/mycollection/png/003-analytics.png" alt="" />
            </li>
            <li className={styles.heading}>
              <h1>Project Status</h1>
            </li>
            <li className={styles.para}>
              <p>
                Get latest status and preview of your project using project ID.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.cardContent2}>
            <li className={styles.heading1}>Enter Project Information</li>
            <li className={styles.input}>
              <input type="text " name="" id="" placeholder="project name" />
            </li>
            <li className={styles.input}>
              <input type="text " name="" id="" placeholder="phone number" />
            </li>
            <li className={styles.button}>
              <button>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InquriyCard;
