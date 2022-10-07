import React, { useReducer, useState } from "react";
import styles from "../../styles/AboutUs/explore.module.scss";
import Tabs from "../../components/boosting/Tabs";
import ExploreCard from "./About_comp/ExploreCard";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import {
  initialState,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./About_comp/ExploreData";
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
const Explore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [select, setSelect] = useState(tabs[0]);

  // const cardDetail = [
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //     bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  //   {
  //     img: "/images/286.png",
  //     heading: "Card Title",
  //     paragraph: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  //   },
  // ];
  return (
    <section className="container">
      <section className=" row flex-column">
        <section className="col">
          <ul className={styles.top_content}>
            <li className={styles.title}>
              <h5>Our Products</h5>
            </li>
            <li className={styles.heading}>
              <h1>Expore & Find</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </section>

        <Col className="mt-5">
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
          <Row className="flex-column flex-lg-row justify-content-center align-items-center">
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
                  <Row className="flex-column flex-sm-row align-items-center justify-content-spacebetween">
                    <Col>
                      <section className="d-flex justify-content-center align-items-center">
                        <span className="p-3">
                          <img
                            className={styles.icon}
                            src={state.card1Img}
                            alt=""
                            width={"30rem"}
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
                            width={"30rem"}
                          />
                        </span>
                        <span>
                          <p>{state.card2}</p>
                        </span>
                      </section>
                    </Col>
                  </Row>
                </li>
                <li className={styles.buttons}>
                  <button className={styles.default}>Discover More</button>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </section>
    </section>
  );
};

export default Explore;
