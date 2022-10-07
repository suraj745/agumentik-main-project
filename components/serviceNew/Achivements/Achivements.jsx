import React from "react";
import styles from "./Achivements.module.scss";
import { Container, Row, Col } from "reactstrap";
import { FaUser, FaAward } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";
const icondata = [
  {
    icon: <FaUser />,
    number: "4",
    suffix: "M+",
    name: "Active Users",
  },
  {
    icon: <BsFillGrid1X2Fill />,
    number: "150",
    suffix: "+",
    name: "Completed Site",
  },
  {
    icon: <AiFillStar />,
    number: "30",
    suffix: "M+",
    name: "User Review",
  },
  {
    icon: <FaAward />,
    number: "1",
    suffix: "k+",
    name: "Awards",
  },
];
const Achivements = () => {
  const [view, setView] = useState(false);
  return (
    <Container fluid className={styles.outer_container}>
      <Container className={styles.Achivements_container}>
        <Row className="flex-column py-5">
          <Col className={`${styles.top} `}>
            <h1 data-aos="fade-up">Our Power Achivements</h1>

            <p data-aos="fade-up">
              An Achivement is a greate accomplishment - something achieved with
              great effort or skill. achieve and Achivement often imply the
              completing of something
            </p>
          </Col>
          <Col className={`${styles.bottom}`}>
            <Row className="justify-content-between overflow-hidden">
              <section
                data-aos="fade-right"
                className={`${styles.image} col-lg-6`}
              >
                <img src="/New folder/video.png" alt="" />
              </section>

              <section
                data-aos="fade-left"
                className={`${styles.icon_grid} col-lg-6 `}
              >
                <section>
                  {icondata.map((value, index) => {
                    return (
                      <motion.ul
                        onViewportEnter={() => setView(true)}
                        onViewportLeave={() => setView(false)}
                        key={index}
                        className={styles.icons_container}
                      >
                        <li>{value.icon}</li>
                        <li>
                          <h1>
                            <CountUp
                              start={view && 0}
                              end={value.number}
                              suffix={value.suffix}
                            />
                          </h1>
                          <p>{value.name}</p>
                        </li>
                      </motion.ul>
                    );
                  })}
                </section>
              </section>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Achivements;
