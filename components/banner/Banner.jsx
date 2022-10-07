import React from "react";
import styles from "../../styles/_banner/_banner.module.scss";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";
import { Container } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { useState } from "react";

import Link from "next/link";
const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className={styles.banner_container}>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1f7FyNxUo0E"
        onClose={() => setOpen(false)}
      />
      <section className={styles.banner_content}>
        <ul className={styles.left_content}>
          <li data-aos="fade-up" className={styles.heading}>
            <h1>Digital Agency with Excellence Service</h1>
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="500"
            className={`${styles.paragraph} overflow-hidden`}
          >
            <p>
              We are the fastest growing startup in Andhra Pradesh for designing
              Software, Website Development, App Development, Animation, Game
              Designing and Digital Marketing Era.
            </p>
          </li>
          <li
            className={styles.buttons}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Link href={"/about-us"}>
              <button className={styles.default}>
                <span className={styles.buttonMore}>
                  <span>More</span> <span> About</span> <span>Us</span>
                </span>
              </button>
            </Link>

            <section className={styles.watch_video}>
              <button onClick={() => setOpen(true)}>Watch Video</button>
              <AiOutlinePlayCircle
                fontSize={"2.5rem"}
                className={styles.play_button}
              />
            </section>
          </li>
        </ul>

        <section className={styles.svg_container}>
          <section className={styles.svg_content}>
            <img
              src="/images/saas-image/arrow.png"
              className="animate__animated animate__fadeInLeft animate__delay-0.5s"
              alt="arrow"
              id="arrow"
            />
            <img
              src="/images/saas-image/box1.png"
              className=" animate__animated animate__fadeInUp animate__delay-0.5s"
              id="box1"
              alt="box1"
            />
            <img
              src="/images/saas-image/boy1.png"
              className="animate__animated animate__fadeInLeft animate__delay-0.5s"
              alt="boy1"
            />
            <img
              src="/images/saas-image/boy2.png"
              className="animate__animated animate__zoomIn animate__delay-0.5s"
              alt="boy2"
            />
            <img
              src="/images/saas-image/boy3.png"
              className="animate__animated animate__bounceIn animate__delay-0.5s"
              alt="boy3"
            />
            <img
              src="/images/saas-image/digital-screen.png"
              className=" animate__animated animate__fadeInDown animate__delay-0.5s"
              alt="digital-screen"
            />
            <img
              src="/images/saas-image/filter1.png"
              className="animate__animated animate__zoomIn animate__delay-0.5s"
              alt="filter1"
            />
            <img
              src="/images/saas-image/filter2.png"
              className="animate__animated animate__fadeInUp animate__delay-0.5s"
              alt="filter2"
            />
            <img
              src="/images/saas-image/filter3.png"
              className="animate__animated animate__rotateIn animate__delay-0.5s"
              alt="filter3"
            />
            <img
              src="/images/saas-image/girl1.png"
              className="animate__animated animate__fadeInUp animate__delay-0.5s"
              alt="girl1"
            />

            <img
              src="/images/saas-image/girl2.png"
              className="animate__animated animate__zoomIn animate__delay-0.5s"
              alt="girl2"
            />
            <img
              src="/images/saas-image/monitor.png"
              className="monitor animate__animated animate__fadeInRight animate__delay-0.5s"
              alt="monitor"
            />
            <img
              src="/images/saas-image/4.png"
              className="animate__animated animate__zoomIn animate__delay-0.5s"
              alt="4"
            />
            <img
              src="/images/saas-image/7.png"
              className="animate__animated animate__zoomIn animate__delay-0.5s"
              alt="7"
            />

            {/* Main Image */}
          </section>

          <section className={styles.mobile_content}>
            <Image
              src="/images/saas-image/main-image.png"
              alt="banner"
              width={500}
              height={500}
            />
          </section>

          {/* <section className={styles.brand_name}>
            <h1>AGUMENTIK</h1>
          </section> */}
        </section>
      </section>

      <section className={styles.shape}>
        <img src="/images/shape/1.png" alt="image" />

        <img src="/images/shape/2.png" alt="image" />

        <img src="/images/shape/3.png" alt="image" />

        <img src="/images/shape/4.png" alt="image" />

        <img src="/images/shape/5.png" alt="image" />

        <img src="/images/shape/6.png" alt="image" />

        <img src="/images/shape/2.png" alt="image" />

        <img src="/images/shape/10.png" alt="image" />

        <img src="/images/shape/7.png" alt="image" />

        <img src="/images/shape/5.png" alt="image" />

        <img src="/images/shape/11.png" alt="image" />
      </section>

      <section className={`${styles.brand_name} text-center`}>
        <h1>AGUMENTIK</h1>
      </section>
    </section>
  );
};

export default Banner;
