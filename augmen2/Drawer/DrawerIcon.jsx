import React, { Component } from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/Agumen2/_drawer/icon.module.scss";

export default class DrawerIcon extends Component {
  icons = [
    <AiOutlineTwitter />,
    <AiFillYoutube />,
    <FaFacebookF />,
    <FaLinkedinIn />,
    <AiOutlineInstagram />,
  ];
  render() {
    return (
      <ul className={styles.icon_container}>
        {this.icons.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    );
  }
}
