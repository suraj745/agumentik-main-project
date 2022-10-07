import React, { Component } from "react";
import styles from "../../styles/Carrer/carrer.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
export default class Carrer extends Component {
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  };

  commingSoonTime = () => {
    let endTime = new Date("August 23, 2022 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.commingSoonTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const Icons = [
      {
        key: "1",
        icons: <FaFacebookF />,
      },
      {
        key: "2",
        icons: <FaTwitter />,
      },
      {
        key: "3",
        icons: <FaLinkedinIn />,
      },
      {
        key: "4",
        icons: <FaInstagram />,
      },
    ];
    return (
      <section className={styles.CarrerContainer}>
        <section className={styles.CarrerContent}>
          <ul>
            <li className={styles.heading}>
              <h1 style={{ color: "white" }}>
                We Dont Have Any Job Opening Yet
              </h1>
            </li>
            <li className={styles.title}>
              <p>Get notified when we post a job</p>
            </li>
            <li className={styles.emailInput}>
              <span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Email"
                />
                <button>Submit</button>
              </span>
            </li>
            <li className={styles.time}>
              <section className={styles.timeDesign}>
                <ul>
                  <li>
                    <span>{this.state.days}</span>
                    <span>days</span>
                  </li>
                  <li>
                    <span>{this.state.hours}</span>
                    <span>hours</span>
                  </li>
                  <li>
                    <span>{this.state.minutes}</span>
                    <span>minutes</span>
                  </li>
                  <li>
                    <span>{this.state.seconds}</span>
                    <span>second</span>
                  </li>
                </ul>
              </section>
            </li>
            <li className={styles.heading1}>
              <span>
                <p>Follow us for update:</p>
              </span>
              <span className={styles.aboutIcons}>
                {Icons.map((value) => {
                  return <span key={value.key}>{value.icons}</span>;
                })}
              </span>
            </li>

            <li className={`${styles.back_button}`}>
              <Link href={"/"} passHref>
                <button>Back</button>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
