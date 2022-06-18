import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/_slider_style/_slider.module.scss";
import { useMediaQuery } from "react-responsive";
// import "./styles.css";

import { Pagination } from "swiper";

const Slider = ({ sliderName }) => {
  const mobile = useMediaQuery({
    query: "(max-width: 360px)",
  });
  const partner = [
    "/images/partnar/1.png",
    "/images/partnar/2.png",
    "/images/partnar/3.png",
    "/images/partnar/4.png",
    "/images/partnar/5.png",
    "/images/partnar/1.png",
    "/images/partnar/2.png",
    "/images/partnar/3.png",
    "/images/partnar/4.png",
    "/images/partnar/5.png",
  ];
  return (
    <section className="container p-5">
      <section className={styles.slider_container}>
        <ul className={styles.slider_content}>
          <li className={styles.heading}>
            <h1>{sliderName}</h1>
          </li>
          <li className={styles.design}>
            <span></span>
            <span></span>
          </li>
        </ul>
        <section className={styles.main_slider}>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },

              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {partner.map((value) => {
              return (
                <SwiperSlide key={partner.length}>
                  <img src={value} alt="slider" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </section>
  );
};

export default Slider;
