import React from "react";
import styles from "../../styles/OpenTagStyle/statistic/statistic.module.scss";
import StatCard from "./StatCard";
import { motion } from "framer-motion";
const Statistic = () => {
  const stat = [
    {
      number: "5M+",
      name: "Financial transaction",
      class: styles.card1,
    },
    {
      number: "2M+",
      name: "Monthly Site visits",
      class: styles.card2,
    },
    {
      number: "200,000",
      name: "active users",
      class: styles.card3,
    },
    {
      number: "5,000",
      class: styles.card4,
      name: "concurrent users",
    },
  ];

  return (
    <section className="stat_container container">
      <section className="stat_content row">
        <section className="stat_left col-lg-4">
          <ul className={styles.left_card}>
            <li className={styles.heading}>
              <h1>By the numbers</h1>
            </li>
            <li className={styles.card_container}>
              <section className={styles.card}>
                <h1>1b+</h1>
                <p>
                  Gameplay Transactions <br />
                  Monthly
                </p>
              </section>
            </li>
          </ul>
        </section>
        <section className="stat_right col-lg-8">
          <ul>
            <li className={styles.small}>
              <ul>
                <li className={styles.heading}>
                  <h1>Statistics</h1>
                </li>
                <li className={styles.paragraph}>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam nam labore laudantium, aperiam repellat aut
                    molestias perspiciatis placeat possimus itaque commodi omnis
                    eius. Earum, dolor itaque cumque a ipsa provident.
                  </p>
                </li>
                <li className={styles.buttons}>
                  <button>learn more</button>
                </li>
              </ul>
            </li>
            <li className={styles.image}>
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </li>
          </ul>
        </section>
      </section>

      <section className="container">
        <section className="row justify-content-center align-items-center gx-5">
          {stat.map((value) => {
            return (
              <section className="col-sm-3 col-lg-2">
                <StatCard
                  name={value.name}
                  number={value.number}
                  className={value.class}
                />
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Statistic;
