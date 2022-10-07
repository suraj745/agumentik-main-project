import React from "react";
import { TiTick } from "react-icons/ti";
import styles from "../../styles/choose/chooselist.module.scss";
const ChoostList = ({ heading, para, id }) => {
  return (
    <ul
      data-aos="fade-up"
      data-aos-delay={`${id * 100}`}
      className={styles.list_card}
    >
      <li className={styles.left}>
        <span className={styles.icon}>
          <TiTick fontSize={"3rem"} />
        </span>
      </li>
      <li className={styles.right}>
        <ul>
          <li className={styles.heading}>
            <h5>{heading}</h5>
          </li>
          <li className={styles.para}>
            <p>{para}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ChoostList;
