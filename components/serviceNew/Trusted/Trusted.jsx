import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Trusted.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";

const carouselData = [
  {
    name: `Jenny Wilson`,
    profile: `/New folder/profile.webp`,
    position: `VP of Marketing`,
    content: `  "The More Campaigns We Can Put Together, The More Pages We
    Can Create, The Bigger We Feel,"`,
  },
  {
    name: `Jenny Wilson`,
    profile: `/New folder/profile.webp`,
    position: `VP of Marketing`,
    content: `  "The More Campaigns We Can Put Together, The More Pages We
    Can Create, The Bigger We Feel,"`,
  },
  {
    name: `Jenny Wilson`,
    profile: `/New folder/profile.webp`,
    position: `VP of Marketing`,
    content: `  "The More Campaigns We Can Put Together, The More Pages We
    Can Create, The Bigger We Feel,"`,
  },
];

const Trusted = ({ heading, para }) => {
  return (
    <Container className={styles.trusted_container}>
      <Row className="flex-column">
        <ul className={`${styles.top}`}>
          <li>
            <h1>{heading}</h1>
          </li>
          <li>
            <p>{para}</p>
          </li>
        </ul>
        <Col>
          <Swiper
            autoplay={true}
            loop={true}
            modules={[Autoplay]}
            className={styles.carousel}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              996: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {carouselData.map((value, index) => {
              return (
                <SwiperSlide key={index} className={styles.carousel_slide}>
                  <ul className={styles.carousel_card}>
                    <li>
                      <section className={styles.carousel_dp}>
                        <img src={value.profile} alt="" />
                        <ul className={styles.profile_content}>
                          <li>
                            <h3>{value.name}</h3>
                          </li>
                          <li>
                            <p>{value.position}</p>
                          </li>
                        </ul>

                        <img src="/New folder/comma.png" alt="" />
                      </section>
                      <section className={styles.content}>
                        <p>{value.content}</p>
                      </section>
                    </li>
                  </ul>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Trusted;
