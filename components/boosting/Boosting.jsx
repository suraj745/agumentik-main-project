import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/_boosting/_boosting.module.scss";
import Tabs from "./Tabs";
import Image from "next/image";
export default class Boosting extends Component {
  constructor() {
    super();

    this.state = {
      heading: "Real-Time Analytics",
      image: "/images/tab/1.jpg",
    };
  }
  tabs = [
    {
      img: "/png2/001-app-development.png",
      name: "Project 1",
      background: "#f3fc93",
      state: {
        heading: "Real-Time Analytics",
        image: "/images/tab/1.jpg",
      },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 2",
      background: "#c2f19e",
      state: {
        heading: "Pay-Per Click",
        image: "/images/tab/2.jpg",
      },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 3",
      background: "#eccca8",
      state: {
        heading: "Online Marketing",
        image: "/images/tab/3.jpg",
      },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 4",
      background: "#8ff0db",
      state: { heading: "Email Marketing", image: "/images/tab/4.jpg" },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 5",
      background: "#cac0f8",
      state: {
        heading: "Social Marketing",
        image: "/images/tab/5.jpg",
      },
    },
    {
      img: "/png2/001-app-development.png",
      name: "Project 6",
      background: "#96dbf5",
      state: { heading: "Digital Marketing", image: "/images/tab/6.jpg" },
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
                    state={() => this.setState(value.state)}
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
            <Row className="flex-column flex-lg-row justify-content-center align-items-center">
              <Col className="d-flex justify-content-center align-items-center ">
                <img src={this.state.image} width={"75%"} />
              </Col>
              <Col>
                <ul className={styles.right_container}>
                  <li className={styles.heading}>
                    <h1>{this.state.heading}</h1>
                  </li>
                  <li className={styles.paragraph}>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </li>
                  <li className={styles.cards}>
                    <Row className="flex-column flex-sm-row align-items-center justify-content-spacebetween">
                      <Col>
                        <section className="d-flex justify-content-center align-items-center">
                          <span className="p-3">
                            <img
                              className={styles.icon}
                              src="/mycollection/png/002-seo.png"
                              alt=""
                              width={"30rem"}
                            />
                          </span>
                          <span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt.
                            </p>
                          </span>
                        </section>
                      </Col>
                      <Col>
                        <section className="d-flex justify-content-center align-items-center">
                          <span className="p-3">
                            <img
                              className={styles.icon}
                              src="/mycollection/png/002-seo.png"
                              alt=""
                              width={"30rem"}
                            />
                          </span>
                          <span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt.
                            </p>
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
        </Row>
      </Container>
    );
  }
}
