import React from "react";
import styles from "../../../styles/AboutUs/comp/teamcard.module.scss";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const TeamCard = ({ image, name, post }) => {
  return (
    <ul className={styles.team_card_container}>
      <li className={styles.image}>
        <img src={image} alt="" />
      </li>
      <li className={styles.team_card_content}>
        <ul>
          <li className={styles.name}>
            <h1>{name}</h1>
          </li>
          <li className={styles.post}>{post}</li>
          <li className={styles.social_icon}>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TeamCard;
