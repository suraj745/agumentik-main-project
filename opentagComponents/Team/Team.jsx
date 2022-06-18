import React, { Component } from "react";
import styles from "../../styles/OpenTagStyle/home/team/team.module.scss";
import TeamCard from "./TeamCard";
export default class Team extends Component {
  cards = [
    {
      image: "/opentag-image/image1.jpg",
      heading: "platform team",
      paragraph:
        "The code we deliver is 100% written from scratch, teams are fully organic taking pride ad ownership over their share of the platform and modules",
      class: "card1",
    },
    {
      image: "/opentag-image/image2.jpg",
      heading: "fraud team",
      paragraph:
        "Real-time processing,aggressinve user segmenting and constand machine learning applied to build and improve modules to outsmart the fraudsters",
      class: "card2",
    },

    {
      image: "/opentag-image/image3.jpg",
      heading: "bonus team",
      paragraph:
        "We are looking to utilize any technology and stack in our journey to make our customers happy.",
      class: "card3",
    },
  ];
  render() {
    return (
      <section className="team_container container">
        <section className="team_content card_grid">
          <section className="left_ad">
            <ul className={styles.card}>
              <li className={styles.card_heading}>
                <h1 className="d-flex">
                  <span className={styles.left_word} style={{ color: "white" }}>
                    Bu
                  </span>
                  <span className={styles.right_word}>
                    ilding Teams from scratch
                  </span>
                </h1>
              </li>

              <li className={styles.paragraph}>
                <p>
                  We are challenging ourselves to create the next market
                  standard in terms of scalability,agility and technology. And
                  we need you to get together.
                </p>
              </li>
            </ul>
          </section>

          {this.cards.map((value) => {
            return (
              <TeamCard
                className={value.class}
                heading={value.heading}
                paragraph={value.paragraph}
                image={value.image}
              />
            );
          })}
        </section>
      </section>
    );
  }
}
