// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper";
import SwipeCard from "./SwipeCard";
import styles from "../../styles/testinomial/_swipertest.module.scss";

export default function SwiperTestinomial() {
  const details = [
    {
      name: "R.Mortein",
      image: "/images/client-image/1.jpg",
      position: "Product Manager",
    },

    {
      name: "Edward Bold",
      image: "/images/client-image/2.jpg",
      position: "Ceo & Founder",
    },
    {
      name: "Mahindra Jhon",
      image: "/images/client-image/3.jpg",
      position: "Ceo & Sustainable designer",
    },

    {
      name: "Lee Munroe",
      image: "/images/client-image/4.jpg",
      position: "Underwriter",
    },
    {
      name: "Meg Lanning",
      image: "/images/client-image/3.jpg",
      position: "Agent Manager",
    },

    {
      name: "Lee Munroe",
      image: "/images/client-image/4.jpg",
      position: "Underwriter",
    },
  ];
  return (
    <section className={styles.swiper_container}>
      <Swiper
        // slidesPerView={mobile ? 1 : 2}
        // spaceBetween={mobile ? 20 : 30}
        // slidesPerGroup={mobile ? 2 : 1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
          },
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {details.map((value) => {
          return (
            <SwiperSlide>
              <SwipeCard
                img={value.image}
                name={value.name}
                post={value.position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
