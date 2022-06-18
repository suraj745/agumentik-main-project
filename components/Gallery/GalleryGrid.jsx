import React from "react";
import styles from "../../styles/Gallery/gallery.module.scss";
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
          <ul className={styles.gallery_content}>
            <li className={styles.title}>
              <h5>Gallery</h5>
            </li>
            <li className={styles.heading}>
              <h1>Glimpse</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </section>
        <section className="col">
          <section className={styles.gallery_card_grid}>
            {cardgrid.map((value) => {
              return (
                <span className={value.class}>
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
