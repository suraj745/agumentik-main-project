import React from "react";
import Accord from "./Accord";
import { motion } from "framer-motion";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
const Accordian = {
  create: {
    accord: [
      {
        id: "grow1",
        heading: "REPEATABLE success is possible,with reusable bots.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "grow2",
        heading: "Start with what you have, and evolve without limits",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
    ],
  },
};
const Grow = () => {
  return (
    <section className="row flex-row-reverse" id="Grow">
      <section className="col-lg-6 d-flex  justify-content-center align-items-center">
        <styles className={styles.rtl}>
          <motion.img
            src="/readi-images/grow1.png"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/readi-images/grow2.png"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.5 },
            }}
            viewport={{ once: true }}
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.7 },
            }}
            src="/readi-images/grow3.png"
            alt=""
            viewport={{ once: true }}
          />
        </styles>
      </section>
      <section className="col-lg-6 d-flex align-items-center ">
        <section className="row flex-column align-items-between">
          <section className="col">
            <ul className={styles.accord}>
              <li className={styles.heading}>
                <p>
                  Grow<span>.</span>
                </p>
              </li>
              <li>
                <p>
                  Be READI for growth. Gain the ability to adapt to your
                  evolving needs.
                </p>
              </li>
            </ul>
          </section>
          <section className="col">
            {Accordian.create.accord.map((value) => {
              return (
                <Accord
                  ac_head={value.heading}
                  ac_para={value.paragraph}
                  id={value.id}
                />
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Grow;
