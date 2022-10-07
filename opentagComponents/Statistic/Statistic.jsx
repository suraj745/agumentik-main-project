import React, { useState } from "react";
import styles from "../../styles/OpenTagStyle/statistic/statistic.module.scss";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

import CountUp from "react-countup";
const Statistic = () => {
  const stat = [
    {
      number: "5",
      holder: "M+",
      name: "Financial transaction",
      class: styles.card1,
    },
    {
      number: "2",
      holder: "M+",
      name: "Monthly Site visits",
      class: styles.card2,
    },
    {
      number: "200000",
      name: "active users",
      class: styles.card3,
    },
    {
      number: "5000",
      class: styles.card4,
      name: "concurrent users",
    },
  ];

  const [view, setView] = useState(false);

  return (
    <section className="stat_container container">
      <section className="stat_content row">
        {/* <section className="stat_left col-lg-1">
          <ul className={styles.left_card}>
            <li className={styles.heading}>
              <h1>By the numbers</h1>
            </li>
            <motion.li
              className={styles.card_container}
              whileInView={() => setView(true)}
              onViewportLeave={() => {
                setView(false);
              }}
            >
              <section className={styles.card}>
                <h1>
                  <CountUp start={view && 0} end={1} />
                  B+
                </h1>
                <p>
                  Gameplay Transactions <br />
                  Monthly
                </p>
              </section>
            </motion.li>
          </ul>
        </section> */}
        <section className="stat_right col">
          <ul>
            <li className={styles.small}>
              <ul>
                <li className={styles.heading}>
                  <h1>Statistics</h1>
                </li>
                <li className={styles.paragraph}>
                  <p style={{ fontSize: "1.6rem" }}>
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

      {/* <section className="container pb-5">
        <section className="row justify-content-center align-items-center gx-5">
          {stat.map((value, index) => {
            return (
              <section key={index} className="col-sm-3 col-lg-2">
                <StatCard
                  name={value.name}
                  number={value.number}
                  className={value.class}
                  holder={value.holder ? value.holder : ""}
                />
              </section>
            );
          })}
        </section>
      </section> */}
    </section>
  );
};

export default Statistic;
