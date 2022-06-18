import React, { Component } from "react";
import styles from "../../styles/_dropdown/_dropdown.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
export default class Dropdown extends Component {
  render() {
    const { menuName, name } = this.props;
    return (
      <ul className={styles.drop_container}>
        <li className={styles.name}>
          <a className="d-flex justify-content-center align-items-center text-decoration-none ">
            {menuName}
            <span>
              <AiOutlineDown fontSize={"1rem"} />
            </span>
          </a>

          <ul className={styles.drop_list}>{name}</ul>
        </li>
      </ul>
    );
  }
}
