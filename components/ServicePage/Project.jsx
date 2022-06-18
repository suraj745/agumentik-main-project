import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/ServicePage/project.module.scss";

import Image from "next/image";
import Tabs from "../boosting/Tabs";
export default class Project extends Component {
  constructor() {
    super();

    this.state = {
      img: [
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
        "/images/365.png",
      ],
    };
  }
  tabs = [
    {
      img: "/png2/001-app-development.png",
      name: "Project 1",
      background: "#f3fc93",
      slice: {
        img: [
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
          "http://fakeimg.pl/365x365/",
        ],
      },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 2",
      background: "#c2f19e",

      slice: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 3",
      background: "#eccca8",
      slice: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 4",
      background: "#8ff0db",

      slice: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 5",
      background: "#cac0f8",

      slice: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 6",
      background: "#96dbf5",
      slice: [
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
        "http://fakeimg.pl/365x365/",
      ],
    },
  ];
  render() {
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
          <Col className="mt-5">
            <section className={styles.grid_tabs}>
              {this.tabs.map((value) => {
                return (
                  <Tabs
                    state={() =>
                      this.setState({
                        img: value.slice,
                      })
                    }
                    key={this.tabs.length}
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
              {this.state.img.map((value) => {
                return <img src={value} alt="" width={"100%"} />;
              })}
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}
