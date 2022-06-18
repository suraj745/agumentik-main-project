import React from "react";
import Accord from "./Accord";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
import { motion } from "framer-motion";
const Accordian = {
  create: {
    accord: [
      {
        id: "readi1",
        heading: "Main Point",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "readi2",
        heading: "Main Point",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "readi3",
        heading: "Main Point",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
    ],
  },
};
const Readi = () => {
  return (
    <section className="row " id="Readi">
      <section className="col-lg-6 d-flex  justify-content-center align-items-center">
        <styles className={styles.ltr}>
          <motion.img
            src="/readi-images/readi1.png"
            alt=""
            whileInView={{
              stransition: { duration: 0.6, delay: 0.3 },
            }}
          />
          <motion.img
            src="/readi-images/readi2.png"
            alt=""
            whileInView={{
              transition: { duration: 0.6, delay: 0.5 },
            }}
          />
          <motion.img
            src="/readi-images/readi3.png"
            alt=""
            whileInView={{
              transition: { duration: 0.6, delay: 0.7 },
            }}
          />
        </styles>
      </section>
      <section className="col-lg-6 d-flex align-items-center ">
        <section className="row flex-column align-items-between">
          <section className="col">
            <ul className={styles.accord}>
              <li className={styles.heading}>
                <p>
                  READI<span>.</span>
                </p>
              </li>
              <li>
                <p>
                  Come for identity, stay for the platform. READI to automate
                  your enterprise
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

export default Readi;
