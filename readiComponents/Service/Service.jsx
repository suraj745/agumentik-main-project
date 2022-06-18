import React from "react";
import styles from "../../styles/ReadiStyles/service/serivce.module.scss";
import Accord from "./Accord";
import Create from "./Create";
import ImageGrid from "./ImageGrid";
import Link from "next/link";
import Connect from "./Connect";
import Secure from "./Secure";
import Grow from "./Grow";
import Readi from "./Readi";
const Service = () => {
  return (
    <section className="container">
      <section className="row flex-column ">
        <section className="col">
          <ul className={styles.service_top}>
            <li className={styles.heading}>
              <h1>Our Services</h1>
            </li>
            <li className={styles.paragraph}>
              <p>
                Cocentrate your automation investments to automate the lifecycle
                of your people <br /> and everything they need to do and use
              </p>
            </li>
            <li className={styles.tabs}>
              <Link href={"#Create"} passHref>
                <button>Create</button>
              </Link>
              <Link href={"#Connect"} passHref>
                <button>Connect</button>
              </Link>
              <Link href={"#Secure"} passHref>
                <button>Secure</button>
              </Link>
              <Link href={"#Grow"} passHref>
                <button>Grow</button>
              </Link>
              <Link href={"#Readi"} passHref>
                <button>Readi</button>
              </Link>
            </li>
          </ul>
        </section>
        <section className="col py-5">
          <Create />
          <Connect />
          <Secure />
          <Grow />
          <Readi />
        </section>
      </section>
    </section>
  );
};

export default Service;
