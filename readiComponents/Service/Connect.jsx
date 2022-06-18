import React from "react";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
import { motion } from "framer-motion";
import Accord from "./Accord";

const Accordian = {
  create: {
    accord: [
      {
        id: "connect1",
        heading:
          "Long live your IGA, with a little of help fro then READI platform.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "connect2",
        heading:
          "Does your IAM process run through your ITSM? There a solution for that.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "connect3",
        heading: "Focus on automating your process, not changing it.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
    ],
  },
};
const Connect = () => {
  return (
    <section className="row flex-row-reverse" id="Connect">
      <section className="col-lg-6 d-flex  justify-content-center align-items-center">
        <styles className={styles.rtl}>
          <motion.img
            src="/readi-images/connect1.png"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/readi-images/connect2.png"
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
            src="/readi-images/connect3.png"
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
                  Connect<span>.</span>
                </p>
              </li>
              <li>
                <p>Squeeze the most value out of your IGA and ITSM</p>
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

export default Connect;
