import React from "react";
import styles from "../../styles/OpenTagStyle/home/home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaGooglePlus } from "react-icons/fa";
const Home = () => {
  const home_icon = [<FaFacebook />, <FaTwitter />, <FaGooglePlus />];

  return (
    <section className="home_main_container">
      <section className="container">
        <section className="home_content content_pad row">
          <section className="home_left col-lg-6">
            <motion.ul
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className={styles.left_content}
            >
              <li className={styles.blue}>
                <p>
                  01 <span className={styles.line}></span>
                  welcome
                </p>
              </li>
              <li>
                <h1 className={styles.heading}>
                  Build.Grow.
                  <br />
                  innovate
                </h1>
              </li>
              <li>
                <p className={styles.paragraph}>
                  A spin-off startup within the field of Sports Betting and
                  Gaming.
                </p>
              </li>
              <li>
                <button className={styles.button}>Join the team</button>
              </li>
            </motion.ul>
          </section>

          <motion.section
            className="home_right col-lg-6"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "linear",
              },
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/opentag-image/Layer 2.png"
              alt=""
              width={900}
              height={600}
              objectFit={"scale-down"}
            />
            <section className={styles.social}>
              {home_icon.map((value) => {
                return <span className={styles.icon}>{value}</span>;
              })}

              <span className={styles.line}></span>
              <p>FOLLOW US</p>
            </section>
          </motion.section>
        </section>
      </section>
    </section>
  );
};

export default Home;
