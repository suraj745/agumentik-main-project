import React, { Component } from "react";
import styles from "../../styles/Agumen2/_dropdown/dropdown.module.scss";
import { BsChevronDown } from "react-icons/bs";
export default class Dropdown extends Component {
  render() {
    const { MenuName, MenuList, us } = this.props;
    return (
      <section className={styles.dropdown_container}>
        <section className={styles.menu_name}>
          <section className="d-flex justify-content-center align-items-center">
            <section className={styles.name}>
              <span>{MenuName}</span>
              <span> {us}</span>
            </section>
            <BsChevronDown />
          </section>
        </section>

        <ul className={styles.dropdown_list}>{MenuList}</ul>
      </section>
    );
  }
}
