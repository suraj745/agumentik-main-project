import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "../../styles/ServicePage/serviceswiper.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
// import required modules
import { FreeMode, Pagination } from "swiper";
export default function ServiceSwiper() {
  const tablet = useMediaQuery({ query: "(max-width:768px)" });
  const mobile = useMediaQuery({ query: "(max-width:480px)" });

  const images = [
    "/images/tech.webp",
    "/images/tech.webp",

    "/images/tech.webp",

    "/images/tech.webp",

    "/images/tech.webp",

    "/images/tech.webp",

    "/images/tech.webp",

    "/images/tech.webp",
  ];
  return (
    <>
      <section className="container">
        <section className="row">
          <section className="col">
            <section>
              <section className={styles.right}>
                <ul>
                  <li className={styles.title}>
                    <h5>Technology</h5>
                  </li>
                  <li className={styles.heading}>
                    <h1>Our Tech Stack</h1>
                  </li>
                  <li className={styles.design}>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </section>
            </section>
          </section>
          <section className="col">
            <section className={styles.car} style={{ marginTop: "2rem" }}>
              <Swiper
                slidesPerView={mobile ? 2 : tablet ? 3 : 5}
                spaceBetween={mobile ? 4 : tablet ? 5 : 8}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className={styles.mySwiper}
              >
                {images.map((value) => {
                  return (
                    <SwiperSlide key={images.length}>
                      <Image src={value} width={250} height={200} alt={"img"} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
