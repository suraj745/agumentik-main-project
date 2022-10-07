import React from "react";
import Accord from "./Accord";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
import { motion } from "framer-motion";
const Accordian = {
  create: {
    accord: [
      {
        id: "secure1",
        heading: "DevOps built right in, to give you the control you require.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "secure2",
        heading: "Give your bots and autograph. Sign and protect them.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
      {
        id: "secure3",
        heading: "Make privileged access more than checking out a credential.",
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta optio nobis nam laborum similique quod consectetur`,
      },
    ],
  },
};

const Secure = () => {
  return (
    <section className="row align-items-center " id="Secure">
      <section className="col-lg-6 d-flex justify-content-center align-items-center">
        <styles className={styles.ltr}>
          <motion.img
            src="/readi-images/secure1.png"
            alt=""
            data-aos="fade-up"
          />
          <motion.img
            src="/readi-images/secure2.png"
            alt=""
            data-aos="fade-left"
          />
          <motion.img
            src="/readi-images/secure3.png"
            alt=""
            data-aos="fade-right"
          />
        </styles>
      </section>
      <section className="col-lg-6 ">
        <section className="row flex-column align-items-between">
          <section className="col">
            <ul className={styles.accord}>
              <li className={styles.heading}>
                <p>
                  Secure<span>.</span>
                </p>
              </li>
              <li>
                <p>
                  Secure by design. Protect your entire automation flow from
                  code to the people who use it.
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

export default Secure;
