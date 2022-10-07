import React from "react";
import styles from "../../styles/ReadiStyles/banner/banner.module.scss";
import { motion } from "framer-motion";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section className={styles.banner_container}>
        <section className="container">
          <section className="row content_pad align-items-center">
            <section className="col-lg-6 d-flex flex-column-reverse flex-sm-row ">
              <section className={styles.videoButton}>
                <p>
                  <span>Watch </span>
                  <AiFillPlayCircle fontSize={"3rem"} color={"red"} />
                  <section className={styles.line}>
                    <span className={styles.main_line}></span>
                  </section>
                  <span>our video</span>
                </p>
              </section>

              <ul className={styles.banner_content}>
                <li className={styles.heading}>
                  <h1>
                    Rapid.Repatable.Readi <sup className={styles.small}>TM</sup>
                  </h1>
                </li>
                <li className={`${styles.red_title} mt-4`}>
                  <h1>Bring Real Automation</h1>
                </li>
                <li className={styles.heading2}>
                  <h1>Back to identity Management</h1>
                </li>
                <li className={`${styles.paragraph} mt-5`}>
                  <p>
                    No limits. Make the management of your people, and everthing
                    they need for success, the quickest and most reliable
                    process you have, without having to change a single thing.
                  </p>
                </li>
                <li className={`${styles.button} mt-5`}>
                  <button>
                    <span>Readi for success ?</span>
                    <i></i>
                  </button>
                </li>
              </ul>
            </section>

            <section className="col-lg-6 d-flex justify-content-center align-items-center">
              <section className={styles.image_container}>
                <motion.img
                  src="/readi-images/banner1.png"
                  alt=""
                  // initial={{ scale: 0 }}
                  whileInView={{
                    scale: [0, 1.2, 1],
                    transition: { duration: 0.6, delay: 0.4 },
                  }}
                  viewport={{ once: true }}
                />
                <motion.img
                  src="/readi-images/banner2.png"
                  alt=""
                  // initial={{ scale: 0 }}
                  whileInView={{
                    scale: [0, 1.2, 1],
                    transition: { duration: 0.6, delay: 0.6 },
                  }}
                  viewport={{ once: true }}
                />
                <motion.img
                  src="/readi-images/banner3.png"
                  alt=""
                  // initial={{ scale: 0 }}
                  whileInView={{
                    scale: [0, 1.2, 1],
                    transition: { duration: 0.6, delay: 0.8 },
                  }}
                  viewport={{ once: true }}
                />
              </section>
            </section>

            <ul className={styles.social_icon}>
              <li>
                <span className={styles.main_icon}>
                  <FaFacebook fontSize={"2.5rem"} />
                </span>
                <span className={styles.main_icon}>
                  <FaTwitter fontSize={"2.5rem"} />
                </span>
                <span className={styles.main_icon}>
                  <FaGooglePlusG fontSize={"2.5rem"} />
                </span>
                <span className={styles.line}></span>

                <p>follow us</p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Banner;
