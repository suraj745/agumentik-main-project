import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "../../styles/_slider_style/_slider.module.scss";
import Marquee from "react-fast-marquee";
const partner = [
  {
    image: "/images/partnar/1.png",
  },
  {
    image: "/images/partnar/2.png",
  },
  {
    image: "/images/partnar/3.png",
  },
  {
    image: "/images/partnar/4.png",
  },
  {
    image: "/images/partnar/5.png",
  },

  {
    image: "/images/partnar/1.png",
  },
  {
    image: "/images/partnar/2.png",
  },
  {
    image: "/images/partnar/3.png",
  },
  {
    image: "/images/partnar/4.png",
  },
  {
    image: "/images/partnar/5.png",
  },
];
const Slider = ({ sliderName }) => {
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
          {/* <Swiper
            className={styles.brand_slider}
            loop={true}
            autoplay={{
              delay: 1000,
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
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
          >
            <Marquee>
              {partner.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={value.image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Marquee>
          </Swiper> */}

          <Marquee speed={50} className={styles.grid_marquee} gradientWidth={0}>
            {partner.map((value, index) => {
              return (
                <section key={index} className={styles.image_wrapper}>
                  <img src={value.image} alt="" />
                </section>
              );
            })}
          </Marquee>
        </section>
      </section>
    </section>
  );
};

export default Slider;
