import React from "react";
import styles from "../../styles/TVR styles/WhyWork/work.module.scss";
import WorkCard from "./WorkCard";
import { BsGraphUp } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { GiDiceTarget, GiPerson } from "react-icons/gi";
const Work = () => {
  const cardDetail = [
    {
      icons: <BsGraphUp style={{ position: "absolute" }} fontSize={"5rem"} />,
      heading: "massive scale",
      paragraph:
        "Nulla finibus bibdendum commonod. In laoret quam et vestibuumn",
    },
    {
      icons: <SiWebmoney style={{ position: "absolute" }} fontSize={"5rem"} />,
      heading: "Free Roaming",
      paragraph:
        "Nulla finibus bibdendum commonod. In laoret quam et vestibuumn",
    },
    {
      icons: (
        <GiDiceTarget style={{ position: "absolute" }} fontSize={"5rem"} />
      ),
      heading: "4D Design",
      paragraph:
        "Nulla finibus bibdendum commonod. In laoret quam et vestibuumn",
    },
    {
      icons: <GiPerson style={{ position: "absolute" }} fontSize={"5rem"} />,
      heading: "multiplayer vr",
      paragraph:
        "Nulla finibus bibdendum commonod. In laoret quam et vestibuumn",
    },
  ];
  return (
    <section className={styles.work_black_container}>
      <section className="container">
        <section className="row content_pad flex-column ">
          <section className="col">
            <ul className={styles.top_content}>
              <li className={styles.heading}>
                <h1>Why work with us</h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  A ture VR system is a large scale, motion capture,multiplayer,
                  4D <br /> system combined with enabled physical objects, force
                  and haptic feeback solutions
                </p>
              </li>
            </ul>
          </section>
          <section className="col mt-5">
            <section className={styles.work_grid}>
              {cardDetail.map((value) => {
                return (
                  <WorkCard
                    key={cardDetail.length}
                    icons={value.icons}
                    heading={value.heading}
                    paragraph={value.paragraph}
                  />
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Work;
