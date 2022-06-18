import React from "react";
import styles from "../../styles/_modal/_modal.module.scss";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Modal = ({ close }) => {
  const instaImage = [
    "/images/instagram-image/1.jpg",
    "/images/instagram-image/2.jpg",
    "/images/instagram-image/3.jpg",
    "/images/instagram-image/4.jpg",
    "/images/instagram-image/5.jpg",
    "/images/instagram-image/6.jpg",
    "/images/instagram-image/7.jpg",
    "/images/instagram-image/8.jpg",
  ];

  const icons = [
    <AiOutlineTwitter />,
    <AiFillYoutube />,
    <FaFacebookF />,
    <FaLinkedinIn />,
    <AiOutlineInstagram />,
  ];

  return (
    <motion.section
      className={styles.modal_container}
      initial={{ x: "100vw" }}
      animate={{ x: "0vw" }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.3, ease: "linear", type: "tween" }}
    >
      <ul className={styles.about_section}>
        <li className={styles.cross}>
          <ImCross onClick={close} />
        </li>
        <li className={styles.heading}>
          <h1>About Us</h1>
        </li>
        <li className={styles.paragraph}>
          <p>
            We believe brand interaction is key to communication. Real
            innovations and positive customer experience are the heart of
            successful communication. No fake products and services. The
            customer is king, their lives and needs are the inspiration.
          </p>
        </li>
      </ul>

      <ul className={styles.insta_section}>
        <li className={styles.heading}>
          <h1>Instagram</h1>
        </li>
        <li className={styles.grid_images}>
          {instaImage.map((value) => {
            return (
              <span>
                <img src={value} alt="grid_image" width={"100%"} />
              </span>
            );
          })}
        </li>
      </ul>

      <ul className={styles.contact_section}>
        <li className={styles.heading}>
          <h1>+088 130 629 8615</h1>
        </li>
        <li className={styles.or}>
          <p>OR</p>
        </li>
        <li className={styles.heading}>
          <h1>info@neemo.com</h1>
        </li>
        <li className={styles.icons}>
          {icons.map((value) => {
            return <span>{value}</span>;
          })}
        </li>
      </ul>
    </motion.section>
  );
};

export default Modal;
