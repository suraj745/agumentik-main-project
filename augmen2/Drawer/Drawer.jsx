import React, { Component } from "react";
import styles from "../../styles/Agumen2/_drawer/drawer.module.scss";
import { ImCross } from "react-icons/im";
import DrawerIcon from "./DrawerIcon";
import { motion } from "framer-motion";
export default class Drawer extends Component {
  images = [
    "/images/instagram-image/1.jpg",
    "/images/instagram-image/2.jpg",
    "/images/instagram-image/3.jpg",
    "/images/instagram-image/4.jpg",
    "/images/instagram-image/5.jpg",
    "/images/instagram-image/6.jpg",
    "/images/instagram-image/7.jpg",
    "/images/instagram-image/8.jpg",
  ];
  render() {
    const { closeDrawer } = this.props;
    return (
      <motion.section
        className={styles.drawer_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.section
          className={styles.white_side}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 0.6 }}
        >
          <section className="container ">
            <section className="row flex-column">
              <section className="col">
                <ul className={styles.top}>
                  <li className={styles.cross}>
                    <ImCross onClick={closeDrawer} />
                  </li>
                  <li className={styles.heading}>
                    <h1>About Us</h1>
                  </li>
                  <li className={styles.paragraph}>
                    <p>
                      We believe brand interaction is key to communication. Real
                      innovations and positive customer experience are the heart
                      of successful communication. No fake products and
                      services. The customer is king, their lives and needs are
                      the inspiration
                    </p>
                  </li>
                  <li className={styles.heading}>
                    <h1>Instagram</h1>
                  </li>
                  <li className={styles.instagram_grid}>
                    {this.images.map((value) => {
                      return <img src={value} alt="grid_image" />;
                    })}
                  </li>
                </ul>

                <ul className={styles.contact}>
                  <li className={styles.red_number}>
                    <h1>+088 130 629 8615</h1>
                  </li>
                  <li className={styles.or}>
                    <p>OR</p>
                  </li>
                  <li className={styles.black_number}>
                    <h1>info@neemo.com</h1>
                  </li>
                  <li className={styles.icons}>
                    <DrawerIcon />
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </motion.section>
      </motion.section>
    );
  }
}
