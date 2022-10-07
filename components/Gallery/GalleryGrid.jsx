import React from "react";
import styles from "../../styles/Gallery/gallery.module.scss";
import { FiSearch } from "react-icons/fi";
const GalleryGrid = () => {
  const cardgrid = [
    {
      img: "/images/portfolio/1.png",
      class: styles.card1,
    },
    {
      img: "/images/portfolio/2.png",
      class: styles.card2,
    },
    {
      img: "/images/portfolio/3.png",
      class: styles.card3,
    },
    {
      img: "/images/portfolio/4.png",
      class: styles.card4,
    },
    {
      img: "/images/portfolio/5.png",
      class: styles.card5,
    },
    {
      img: "/images/portfolio/6.png",
      class: styles.card6,
    },
    {
      img: "/images/portfolio/7.png",
      class: styles.card7,
    },
  ];
  return (
    <section className="container">
      <section className="content_pad row flex-column">
        <section className="col">
          <ul className={`${styles.gallery_content} `}>
            <li className={styles.title}>
              <h5 style={{ fontSize: "clamp(2rem,4vw,4rem)" }}>Gallery</h5>
            </li>

            <li className={styles.search}>
              <input placeholder={"Search"} type="search" name="" id="" />
              <span style={{ display: "block", width: "4rem" }}>
                <FiSearch fontSize={"2rem"} />
              </span>
            </li>
          </ul>
        </section>
        <section className="col mt-5">
          <section className={styles.gallery_card_grid}>
            {cardgrid.map((value, index) => {
              return (
                <span
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200}`}
                  className={value.class}
                  key={index}
                >
                  <img src={value.img} alt="grid_card" />
                </span>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default GalleryGrid;
