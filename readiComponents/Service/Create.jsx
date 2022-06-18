import React from "react";
import Accord from "./Accord";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
import { motion } from "framer-motion";
const Accordian = {
  create: {
    accord: [
      {
        id: "create1",
        heading: "Easy to create low-code TaskBots.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "create2",
        heading:
          "Automate the collection,storage, and transformation of data with DataBots for automations, custom reporting, or auditing",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "create3",
        heading: "Give your people the UX they need without the labor pains",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },

      {
        id: "create4",
        heading: "Take identity automation beyond account management",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
    ],
  },
};

const Create = () => {
  return (
    <section className="row align-items-center " id="Create">
      <section className="col-lg-6 d-flex justify-content-center align-items-center">
        <styles className={styles.ltr}>
          <motion.img
            src="/readi-images/create1.png"
            alt=""
            initial={{ x: 200, y: 300, opacity: 0, zIndex: -1 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/readi-images/create2.png"
            alt=""
            initial={{ x: -200, y: 300, opacity: 0, zIndex: -1 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
            }}
            viewport={{ once: true }}
          />
          <motion.img src="/readi-images/create3.png" alt="" />
        </styles>
      </section>
      <section className="col-lg-6 ">
        <section className="row flex-column align-items-between">
          <section className="col">
            <ul className={styles.accord}>
              <li className={styles.heading}>
                <p>
                  Create<span>.</span>
                </p>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Rapidly build your new robotic workface to extend your IGA and
                  ITSM
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

export default Create;
