import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/ServicePage/project.module.scss";
import Tabs from "../boosting/Tabs";
import { useReducer } from "react";

const initialState = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const project2 = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const project3 = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const project4 = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const project5 = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const project6 = [
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
  `/images/365.png`,
];

const tabs = [
  {
    img: `/png2/001-app-development.png`,
    name: `Project 1`,
    background: `#f3fc93`,
    type: "PROJECT_1",
    payload: initialState,
  },
  {
    img: "/png2/001-app-development.png",
    name: "Project 2",
    background: "#c2f19e",
    type: "PROJECT_2",
    payload: project2,
  },
  {
    img: "/png2/001-app-development.png",
    name: "Project 3",
    background: "#eccca8",
    type: "PROJECT_3",
    payload: project3,
  },
  {
    img: "/png2/001-app-development.png",
    name: "Project 4",
    background: "#8ff0db",
    type: "PROJECT_4",
    payload: project4,
  },
  {
    img: "/png2/001-app-development.png",
    name: "Project 5",
    background: "#cac0f8",
    type: "PROJECT_5",
    payload: project5,
  },
  {
    img: "/png2/001-app-development.png",
    name: "Project 6",
    background: "#96dbf5",
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

const Project = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container className={styles.boosting_container}>
      <Row className="boosting_content flex-column justify-content-between align-items-center flex-column">
        <Col className="d-flex  justify-content-center align-items-center">
          <ul className={styles.intro}>
            <li className={styles.title}>
              <h5>Projects</h5>
            </li>
            <li className={styles.heading}>
              <h1>Our Done Projects</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </Col>
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
                />
              );
            })}
          </section>
        </Col>
        <Col className={styles.content}>
          <section className={styles.card_grid}>
            {state.map((value, index) => {
              return <img key={index} src={value} alt="" width={"100%"} />;
            })}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
