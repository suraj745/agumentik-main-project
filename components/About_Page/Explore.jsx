import React from "react";
import styles from "../../styles/AboutUs/explore.module.scss";
import ExploreCard from "./About_comp/ExploreCard";
const Explore = () => {
  const cardDetail = [
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
      bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
    {
      img: "/images/286.png",
      heading: "Card Title",
      paragraph: `Some quick example text to build on the card title and make up the
        bulk of the card's content.`,
    },
  ];
  return (
    <section className="container">
      <section className="content_pad row flex-column">
        <section className="col">
          <ul className={styles.top_content}>
            <li className={styles.title}>
              <h5>Our Products</h5>
            </li>
            <li className={styles.heading}>
              <h1>Expore & Find</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </section>
        <section className="col">
          <section className={styles.card_grid}>
            {cardDetail.map((value) => {
              return (
                <ExploreCard
                  image={value.img}
                  heading={value.heading}
                  paragraph={value.paragraph}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Explore;
