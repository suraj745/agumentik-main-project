import React, { useReducer, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_boosting/_boosting.module.scss";
import Tabs from "./Tabs";

import {
  initialState,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./BoostingData";
import { useEffect } from "react";

/* ------------------------------ InitialState ------------------------------ */

/* ---------------------------- Reducer function ----------------------------*/

const tabs = [
  {
    img: `/boosting/web-development.png`,
    name: `Website Development`,
    background: ``,
    type: "PROJECT_1",
    payload: initialState,
  },
  {
    img: "/boosting/shopping.png",
    name: "Ecommerce Development",
    background: "",
    type: "PROJECT_2",
    payload: project2,
  },
  {
    img: "/boosting/app-development.png",
    name: "Mobile App Development",
    background: "",
    type: "PROJECT_3",
    payload: project3,
  },
  {
    img: "/boosting/software.png",
    name: "Software Development",
    background: "",
    type: "PROJECT_4",
    payload: project4,
  },
  {
    img: "/boosting/social-media.png",
    name: "Digital Marketing",
    background: "",
    type: "PROJECT_5",
    payload: project5,
  },
  {
    img: "/boosting/pay-per-click.png",
    name: "Pay-Per Click",
    background: "",
    type: "PROJECT_6",
    payload: project6,
  },
];

console.log("tabs", Tabs[0]);
const reducer = (state, action) => {
  switch (action.type) {
    case "PROJECT_1":
      return (state = action.payload);

    case "PROJECT_2":
      return (state = action.payload);

    case "PROJECT_3":
      return (state = action.payload);

    case "PROJECT_4":
      return (state = action.payload);

    case "PROJECT_5":
      return (state = action.payload);

    case "PROJECT_6":
      return (state = action.payload);

    default:
      return state;
  }
};
const Boosting = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [select, setSelect] = useState(tabs[0]);

  return (
    <Container className={styles.boosting_container}>
      <Row className="boosting_content flex-column justify-content-between align-items-center flex-column">
        <Col className="d-flex justify-content-center align-items-center">
          <ul className={styles.intro}>
            <li className={styles.title}>
              <h5>Boosting</h5>
            </li>
            <li className={styles.heading}>
              <h1>Our Recent Projects</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </Col>
        <Col className="mt-5 ">
          <section className={styles.grid_tabs}>
            {tabs.map((value, index) => {
              return (
                <Tabs
                  state={() => {
                    dispatch({ type: value.type, payload: value.payload });
                  }}
                  key={index}
                  icon={value.img}
                  heading={value.name}
                  background={value.background}
                  classname={value === select ? styles.active : ""}
                  setSelect={() => setSelect(value)}
                />
              );
            })}
          </section>
        </Col>

        <Col className={`${styles.content} mt-5 `}>
          <Row className="flex-column flex-lg-row justify-content-center align-items-center gap-3 gap-sm-0">
            <Col className="d-flex justify-content-center align-items-center ">
              <img
                className={styles.boosting_image}
                src={state.img}
                width={"100%"}
              />
            </Col>
            <Col>
              <ul className={styles.right_container}>
                <li className={styles.heading}>
                  <h1>{state.heading}</h1>
                </li>
                <li className={styles.paragraph}>
                  <p>{state.para}</p>
                </li>
                <li className={styles.cards}>
                  <Row className="flex-column flex-sm-row align-items-center  justify-content-spacebetween">
                    <Col>
                      <section className="d-flex justify-content-center align-items-center">
                        <span className="p-3">
                          <img
                            className={styles.icon}
                            src={state.card1Img}
                            alt=""
                            width={"40rem"}
                          />
                        </span>
                        <span>
                          <p>{state.card1}</p>
                        </span>
                      </section>
                    </Col>
                    <Col>
                      <section className="d-flex justify-content-center align-items-center">
                        <span className="p-3">
                          <img
                            className={styles.icon}
                            src={state.card2Img}
                            alt=""
                            width={"40rem"}
                          />
                        </span>
                        <span>
                          <p>{state.card2}</p>
                        </span>
                      </section>
                    </Col>
                  </Row>
                </li>
                <li
                  className={`${styles.buttons} d-flex gap-3 flex-wrap justify-content-center`}
                >
                  <button className={styles.default}>Discover More</button>
                  <button className={styles.default}>Download Brochere</button>
                  <button className={styles.default}>Book a Demo</button>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Boosting;
