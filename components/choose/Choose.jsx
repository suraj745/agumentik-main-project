import React from "react";
import styles from "../../styles/choose/choose.module.scss";
import ChoostList from "./ChoostList";
const Choose = () => {
  const list = [
    {
      heading: "First Working Process",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.",
    },
    {
      heading: "Dedicated Team Member",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.",
    },
    {
      heading: "24/7 Support",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="container">
      <section className="row  justify-content-between align-items-center py-5">
        <section className="col-lg-6">
          <ul className={styles.top}>
            <li className={styles.title}>
              <h5>Why Choose Us</h5>
            </li>
            <li className={styles.heading}>
              <h1>Outstanding Digital Experience</h1>
            </li>

            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>

            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </li>
          </ul>

          <section className={styles.list}>
            {list.map((value, index) => {
              return (
                <ChoostList
                  id={index}
                  key={index}
                  heading={value.heading}
                  para={value.para}
                />
              );
            })}

            <button data-aos="fade-up" className={`${styles.default} mt-5`}>
              Discover More
            </button>
          </section>
        </section>
        <section className="col-lg-5 overflow-hidden">
          <img
            className={styles.image}
            data-aos="fade-left"
            src="/chooseus.jpg"
            alt=""
            width={"100%"}
          />
        </section>
      </section>
    </section>
  );
};

export default Choose;
