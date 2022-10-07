import React from "react";
import styles from "../../styles/TVR styles/Design/design.module.scss";
import DesignCard from "./DesignCard";
import { GiPlayerNext, GiGamepad, GiThroneKing } from "react-icons/gi";
import { BiGame } from "react-icons/bi";
const Desing = () => {
  const game = [
    {
      icon: <GiPlayerNext fontSize={"6rem"} />,
      number: "10",
      title: "Players full body",
    },
    {
      icon: <GiGamepad fontSize={"6rem"} />,
      number: "16",
      title: "Arcade Mode",
    },
    {
      icon: <BiGame fontSize={"6rem"} />,
      number: "4",
      title: "Games running",
    },
    {
      icon: <GiThroneKing fontSize={"6rem"} />,
      number: "1,120",
      title: "m2 Installed capacity",
    },
  ];
  return (
    <section className={styles.design_container}>
      <section className="container">
        <section className="row top_content_pad flex-column">
          <section className="col">
            <section className="row flex-column">
              <section className="col">
                <ul className={styles.design_top}>
                  <li data-aos="fade-up" className={styles.heading}>
                    <h1>
                      Passionatley <span>designed</span> for you
                    </h1>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className={styles.paragraph}
                  >
                    <p>
                      A true VR system is a large scale, motion capture,
                      multiplayer, 4D system combined with enabled <br />
                      physical objects, force and haptic feedback solutions.
                    </p>
                  </li>
                </ul>
              </section>
              <section className="col">
                <section className={styles.game_grid}>
                  {game.map((value, index) => {
                    return (
                      <DesignCard
                        id={index}
                        key={index}
                        title={value.title}
                        icon={value.icon}
                        number={value.number}
                      />
                    );
                  })}
                </section>
              </section>
            </section>
          </section>
          <section className="col">
            <section className="row align-items-center flex-md-row flex-column-reverse">
              <section data-aos="fade-right" className="col-md-6">
                <section className={styles.design_left}>
                  <img src="/tvr-images/redboy.png" alt="" />
                </section>
              </section>
              <section className="col-md-6 d-flex justify-content-end">
                <ul className={styles.design_right}>
                  <li data-aos="fade-up" className={styles.heading}>
                    <h1>
                      Let's hold the <span className={styles.bold}>future</span>
                      <br />
                      together. Learn how to be an{" "}
                      <span className={styles.bold}>investor</span>
                    </h1>
                  </li>
                  <li className={styles.paragraph}></li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className={styles.contact_button}
                  >
                    <button>Contact Us</button>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Desing;
