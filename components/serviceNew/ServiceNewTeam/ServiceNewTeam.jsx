import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ServiceNewTeam.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

let imageLink = [
  `/New folder/brand1.png`,
  `/New folder/brand2.png`,
  `/New folder/brand3.png`,
  `/New folder/brand4.png`,
];
const ServiceNewTeam = () => {
  const [count, setCount] = useState(false);
  return (
    <Container className={styles.ServiceNewTeamContainer}>
      <Row className="align-items-center">
        <Col lg={3} className={styles.left}>
          <motion.ul
            onViewportEnter={() => {
              setCount(true);
            }}
            onViewportLeave={() => {
              setCount(false);
            }}
          >
            <li>
              <h1>
                <CountUp
                  start={count && 0}
                  end={5000}
                  suffix={"+"}
                  separator={","}
                />
              </h1>
            </li>
            <li>
              <p>Please use us for their range</p>
            </li>
          </motion.ul>
        </Col>
        <Col lg={9} className={styles.right}>
          <Swiper
            className={styles.brand_slider}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              990: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
          >
            {imageLink.map((value, index) => {
              return (
                <SwiperSlide key={index} className={styles.slide}>
                  <img src={value} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceNewTeam;
